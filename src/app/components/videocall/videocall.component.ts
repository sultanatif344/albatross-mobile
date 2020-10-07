import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from "firebase/app";
import { Observable } from 'rxjs';
import * as RecordRTC from 'recordrtc';
import { AuthService } from 'src/app/services/auth.service';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import * as moment from 'moment';
declare let RTCPeerConnection: any;

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.scss']
})
export class VideocallComponent implements OnInit {
  callActive: boolean = false;
  pc: any;
  localStream: any;
  channel: AngularFireList<{}>;
  database: firebase.database.Reference;
  senderId: string;
  videoIsOn:boolean;
  audioIsOn:boolean;
  role:string;
  @ViewChild("me") me: any;
  @ViewChild("remote") remote: any;
  // @Input() callRunning: boolean;
  @Output() callEnded = new EventEmitter<boolean>();
  recordingActive:boolean;
  recordRtc:any;
  RecordedStream: any;
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask
  @Input() lessonAssignedBy:any;
  @Input() lessonAssignedTo:any;
  downloadLink:string;
  constructor(
    private afDb: AngularFireDatabase,
    private auth:AuthService,
    private afStorage: AngularFireStorage
  ) { 
    this.videoIsOn = false;
    this.audioIsOn = false;
    this.recordingActive = false;
    this.setupWebRtc();
    this.role = this.auth.getUser().role;
  }

  ngOnInit() {
    console.log(this.lessonAssignedBy);
    console.log(this.lessonAssignedTo);
  }

  public ngOnDestroy() {
    this.pc.close();
    let tracks = this.localStream.getTracks();
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].stop();
    }
    this.callActive = false;
  }

  setupWebRtc() {
    this.senderId = this.guid();
    var channelName = "/webrtc";
    this.channel = this.afDb.list(channelName);
    this.database = this.afDb.database.ref().child(channelName);
    this.database.on("child_added", this.readMessage.bind(this));

    try {
      this.pc = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.services.mozilla.com" },
          { urls: "stun:stun.l.google.com:19302" }
        ]
      }, { optional: [] });
    } catch (error) {
      console.log(error);
      this.pc = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.services.mozilla.com" },
          { urls: "stun:stun.l.google.com:19302" }
        ]
      }, { optional: [] });
    }


    this.pc.onicecandidate = event => {
      event.candidate ? this.sendMessage(this.senderId, JSON.stringify({ ice: event.candidate })) : console.log("Sent All Ice");
    }

    this.pc.onremovestream = event => {
      console.log('Stream Ended');
    }

    this.pc.ontrack = event =>
      (this.remote.nativeElement.srcObject = event.streams[0]); 
  }

  sendMessage(senderId, data) {
    var msg = this.channel.push({ sender: senderId, message: data });
    msg.remove();
  }

  readMessage(data) {
    if (!data) return;
    try {
      var msg = JSON.parse(data.val().message);
      let personalData = data.val().personalData;
      var sender = data.val().sender;
      if (sender != this.senderId) {
        if (msg.ice != undefined && this.pc != null) {
          this.pc.addIceCandidate(new RTCIceCandidate(msg.ice));
        } else if (msg.sdp.type == "offer") {
          this.callActive = true;
          this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
            .then(() => this.pc.createAnswer())
            .then(answer => this.pc.setLocalDescription(answer))
            .then(() => this.sendMessage(this.senderId, JSON.stringify({ sdp: this.pc.localDescription })));
        } else if (msg.sdp.type == "answer") {
          this.callActive = true;
          this.pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

 showMe() {
    navigator.mediaDevices.getUserMedia({ audio: this.audioIsOn, video: this.videoIsOn })
      .then(stream => (this.me.nativeElement.srcObject = stream))
      .then(stream => {
        this.pc.addStream(stream);
        this.localStream = stream;
      })
      .then(async ()=> await this.showRemote())
      // .then(()=>{
      
      // })
  }

  showRemote() {
    try {
      this.pc.createOffer()
        .then(offer => this.pc.setLocalDescription(offer))
        .then(() => {
          this.sendMessage(this.senderId, JSON.stringify({ sdp: this.pc.localDescription }));
          this.callActive = true;
        });
    } catch (error) {
      this.setupWebRtc();
      console.log(error);
    }
  }

  hangup() {
    this.pc.close();
    let tracks = this.localStream.getTracks();
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].stop();
    }
    this.callActive = false;
  }

  guid() {
    return (this.s4() + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + this.s4() + this.s4());
  }
  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  turnOnVideo(){
    this.videoIsOn = true;
    this.showMe();
  }
  turnOnAudio(){
    this.audioIsOn = true;
  }
  endCall(){
    this.callActive = false;
    this.callEnded.emit(this.callActive);   
  }

  activateRecording(){
    this.recordingActive = true;
  }

  successCallback(stream:MediaStream){
    var options = {
      mimeType: 'video/webm',
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 128000,
      bitsPerSecond: 128000
    }
    this.RecordedStream =stream;
    this.recordRtc = new RecordRTC(stream,options);
    this.recordRtc.startRecording();
  }

  stopRecording(){
    let recordRTC = this.recordRtc;
    recordRTC.stopRecording(this.processVideo.bind(this));
    // let stream = this.RecordedStream;
    // stream.getAudioTracks().forEach(track => track.stop());
    // stream.getVideoTracks().forEach(track => track.stop());
  }

  processVideo(audioVideoWebMURL){
    let recordRTC = this.recordRtc;
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL((dataURL)=>console.log(dataURL))
    this.upload(recordedBlob);
  }

  upload(file:Blob){
    const id = this.guid();
    var blob = new Blob([file],{type:'video/mp4'})
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(blob);
    this.task.then((uploadSnapshot:firebase.storage.UploadTaskSnapshot)=>{
      return uploadSnapshot.ref.getDownloadURL();
    }).then((downloadUrl)=>{
      this.downloadLink = downloadUrl;
      return this.downloadLink;
    })
    .finally(()=>{
      console.log("Pushing data");
    var refname="/recordings";
    var database = this.afDb.database.ref().child(refname)
    console.log(this.lessonAssignedTo.lessonDate);
    var deletionDate = moment(this.lessonAssignedTo.createdAt).add(1,'week').format('DD/MM/YYYY');
    var createdDate = moment(this.lessonAssignedTo.createdAt).format('DD/MM/YYYY');
    database.push({VideoFor:this.lessonAssignedBy._id ,VideoBy:this.lessonAssignedTo._id ,VideoId:id, CreatedDate:createdDate, DeletionDate:deletionDate,VideoLink:this.downloadLink})
  })
  }

}
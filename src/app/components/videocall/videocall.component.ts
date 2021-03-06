import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from "firebase/app";
import * as RecordRTC from 'recordrtc';
import { AuthService } from 'src/app/services/auth.service';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import * as moment from 'moment';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
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
  database: any;
  senderId: string;
  videoIsOn:boolean;
  audioIsOn:boolean;
  role:string;
  @ViewChild("me") me: any;
  @ViewChild("remote") remote: any;
  @Output() callEnded = new EventEmitter<boolean>();
  recordingActive:boolean;
  recordRtc:any;
  RecordedStream: any;
  ref:AngularFireStorageReference;
  task:AngularFireUploadTask
  @Input() lessonAssignedBy:any;
  @Input() lessonAssignedTo:any;
  downloadLink:string;
  enableReviewPopUp:boolean;
  @Output() reviewPopUpEnableEvent = new EventEmitter<boolean>();
  constructor(
    private afDb: AngularFireDatabase,
    private auth:AuthService,
    private afStorage: AngularFireStorage,
    private platform:Platform,
    private androidPermissions: AndroidPermissions
  ) {
    this.videoIsOn = false;
    this.audioIsOn = false;
    this.recordingActive = false;
    this.role = this.auth.getUser().role;
    if(this.platform.is('android')){
      this.platform.ready().then(()=>{
            this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA)
            .then(
              (result) => {
                if(result.hasPermission == false){
                  this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then((permission)=>{
                    if(permission.hasPermission === true){
                      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then((permission)=>{
                        if(permission.hasPermission === true){
                          this.setupWebRtc();
                        }
                        else{
                          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO);
                        }
                      })

                    }
                  })
                }
                else{
                  this.setupWebRtc()
                }
              })
            })
          }
          else{
          this.setupWebRtc();
        }
  }
  ngOnInit() {
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
          { urls: "stun:stun.l.google.com:19302" },
          {urls:"turn:numb.viagenie.ca", credential:"jogong+366", username:"sultanatif30@gmail.com"}
        ]
      }, { optional: [] });
    } catch (error) {
      this.pc = new RTCPeerConnection({
        iceServers: [
          { urls: "stun:stun.services.mozilla.com" },
          { urls: "stun:stun.l.google.com:19302" },
          {urls:"turn:numb.viagenie.ca", credential:"jogong+366", username:"sultanatif30@gmail.com"}
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
      {
        this.showMe()
      }
  }

  sendMessage(senderId, data) {
    var msg = this.database.push({ sender: senderId, message: data });
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
      return error;
    }
  }

 showMe() {
   try{
    navigator.mediaDevices.getUserMedia({audio:true,video:true})
      .then(stream => (this.me.nativeElement.srcObject = stream))
      .then(stream => {
        this.pc.addStream(stream);
        this.localStream = stream;
      })
      .then(()=>this.showRemote())
    }
  catch(error){
    return error;
  }
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
      return error;
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
  }
  turnOnAudio(){
      this.audioIsOn = true;
  }
  endCall(){
    this.callActive = false;
    this.callEnded.emit(this.callActive);   
    if(this.role=='student'){
    this.enableReviewPopUp = true;
    this.reviewPopUpEnableEvent.emit(this.enableReviewPopUp);
  }
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
    this.recordingActive = false;
    // let stream = this.RecordedStream;
    // stream.getAudioTracks().forEach(track => track.stop());
    // stream.getVideoTracks().forEach(track => track.stop());
  }

  processVideo(){
    let recordRTC = this.recordRtc;
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL((dataURL)=>{
      return dataURL;
    })
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
    var refname="/recordings";
    var database = this.afDb.database.ref().child(refname)
    var deletionDate = moment(this.lessonAssignedTo.createdAt).add(1,'week').format('DD/MM/YYYY');
    var createdDate = moment(this.lessonAssignedTo.createdAt).format('DD/MM/YYYY');
    database.push({VideoFor:this.lessonAssignedBy._id ,VideoBy:this.lessonAssignedTo._id ,VideoId:id, CreatedDate:createdDate, DeletionDate:deletionDate,VideoLink:this.downloadLink})
  })
  }

}
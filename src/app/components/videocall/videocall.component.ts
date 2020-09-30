import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppState } from 'src/app/store/app.states';
// import * as firebase from 'firebase';
@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.scss'],
})
export class VideocallComponent implements OnInit {
  @Input() callIsActive:boolean;
  public database: any;
  public yourId: string;
  public pc: RTCPeerConnection;
  public servers:any;
  @Input() id: string;
  public friendsVideo:HTMLVideoElement;
  public yourVideo:HTMLVideoElement;
  constructor(private firebaseApp:FirebaseApp,private store:Store<AppState>, private router:ActivatedRoute) { 
    this.database = this.firebaseApp.database().ref();
    this.yourId = this.id;
    console.log(this.yourId);
    this.initialize(this.id);


    
    this.database.on('child_added',(snapshot)=>{
      this.readMessage(snapshot,this.id,this.pc)
    });
   
  }

 

  ngAfterViewInit(){
    this.friendsVideo = document.querySelector('#friendsVideo');
    this.yourVideo  = document.querySelector('#yourVideo');

    this.showMyFace()
    this.showFriendsFace(this.pc);
  }

  ngOnInit() {
    console.log(this.id); 
    this.servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'},{'urls': 'turn:numb.viagenie.ca','credential': 'webrtc','username': 'websitebeaver@mail.com'}]};
    console.log(this.servers);
    console.log(this.id);
    this.yourId = this.id;
    console.log(this.yourId);
    this.pc = new RTCPeerConnection(this.servers);
    this.pc.onicecandidate = (event => event.candidate?this.sendMessage(this.yourId, JSON.stringify({'ice': event.candidate})):console.log('Sent all Ice'))
    // this.pc.ontrack = (stream => this.friendsVideo.srcObject = stream[0] )
    this.pc.ontrack = e => this.friendsVideo.srcObject = e.streams[0];
  }

  sendMessage(senderId:string, data:any){
    console.log(senderId);
    this.database.push({ sender: senderId, message: data})
    .then(()=>console.log("data sent"))
    .then(()=>this.database.remove())
    .then(()=> console.log("child removed"))
  }


  readMessage(data,yourId,pc){
      var msg = JSON.parse(data.val()?.message);
      var sender:string = data.val()?.sender;
      var id:string = yourId;
      console.log(data);
      console.log(id);
      console.log(sender);
      console.log(msg);
      if(sender.toString()===id.toString()){
        console.log("id is same");
        return sender;
      }
      else{
        console.log("Recieving someone else's id")
        if(msg.ice != undefined){
          pc.addIceCandidate(new RTCIceCandidate(msg.ice))
        }
        else if(msg.sdp.type == 'offer'){
          pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
          .then(()=> pc.createAnswer())
          .then(answer=> {
            console.log(answer);
            pc.setLocalDescription(answer)
          })
          .then(()=> this.sendMessage(yourId,JSON.stringify({'sdp':pc.localDescription})))
        }
        else if(msg.sdp.type == 'answer'){
          pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
        }
      }

  }
  

  
showMyFace(){
  navigator.mediaDevices.getUserMedia({audio:true, video:true})
  .then(stream => {
    this.yourVideo.srcObject = stream
    for(const track of stream.getTracks()){
      this.pc.addTrack(track)
    }
  })
  .then(()=>console.log("code being called"))
}

showFriendsFace(pc:RTCPeerConnection){
  pc.createOffer()
  .then(offer=> this.pc.setLocalDescription(offer))
  .then(()=> this.sendMessage(this.yourId,JSON.stringify({'sdp': pc.localDescription})))
  .then(()=>{
    console.log("being called");
  })
}

  endCall(){
    this.callIsActive = false;
  }

  initialize(id){
    this.pc = new RTCPeerConnection();
    this.yourId =  id;
    console.log(this.yourId);
    console.log(id);

    
      
    
  }

}

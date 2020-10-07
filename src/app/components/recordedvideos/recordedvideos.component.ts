import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-recordedvideos',
  templateUrl: './recordedvideos.component.html',
  styleUrls: ['./recordedvideos.component.scss'],
})
export class RecordedvideosComponent implements OnInit {

  lessonDetail:Array<Object>=[{}];
  unHideComments:Boolean;
  videoId:string;
  constructor(private firebaseService:FirebaseService,private auth:AuthService) {
    this.getVideos();
    this.unHideComments = false;
  }

  ngOnInit() {
    
  }

  unhideCommentSection(VideoId:any){
    this.videoId = VideoId.VideoId
    this.unHideComments = !this.unHideComments;
  }

  getVideos(){
    if(this.auth.getUser().role==="instructor"){
      this.firebaseService.filterByName('VideoBy',this.auth.getUser().id,this.lessonDetail);
      console.log(this.lessonDetail);
    }
    else{
      var studentVideos = this.firebaseService.filterByName("VideoFor",this.auth.getUser().id,this.lessonDetail);
    }
  }
  

}

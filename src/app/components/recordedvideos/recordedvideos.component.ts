import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-recordedvideos',
  templateUrl: './recordedvideos.component.html',
  styleUrls: ['./recordedvideos.component.scss'],
})
export class RecordedvideosComponent implements OnInit {

  public lessonDetail:Array<Object>=[{}];
  public videoDetail:Array<Object>=[{}];
  unHideComments:Boolean;
  videoId:string;
  @Output() saveEvent = new EventEmitter<any>();
  constructor(private firebaseService:FirebaseService,private auth:AuthService) {
    this.getVideos();
    this.unHideComments = false;
  }

  ngOnInit() {
    this.deleteVideos();
  }

  unhideCommentSection(VideoId:any){
    this.videoId = VideoId.VideoId
    this.unHideComments = !this.unHideComments;
  }

  getVideos(){
    if(this.auth.getUser().role==="instructor"){
      this.firebaseService.filterByName('VideoBy',this.auth.getUser().id,this.lessonDetail)
    }
    else{
       this.firebaseService.filterByName("VideoFor",this.auth.getUser().id,this.lessonDetail);
    }
  }

  deleteVideos(){
      var currentDate = moment().format('DD/MM/YYYY')
      this.firebaseService.deleteVideoRef('DeletionDate',currentDate);
  }

  SaveFileToDisk(Recording:any){
    this.saveEvent.emit(Recording);
  }
  

}

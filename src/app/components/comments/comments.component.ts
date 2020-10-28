import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {

  public message:string;
  @Input() videoId:string;
  public comments:Array<Object>=[{}];
  public newComments:Array<Object>=[{}];
  constructor(private firebaseService:FirebaseService,private authService:AuthService) { 
    
  }

  ngOnInit() {
    if(this.videoId!=undefined){
      this.firebaseService.filterCommentsByVideo('videoId',this.videoId,this.comments);
      this.newComments = this.comments.filter(val=>Object.keys(val).length!=0);
    }
  }

   AddComments(){
     console.log("Triggered");
     console.log(this.message);
     this.firebaseService.pushComments(this.message,this.authService.getUser().id,this.videoId,this.authService.getUser().name);
   } 

}

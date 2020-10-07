import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import { AngularFireDatabase, AngularFireDatabaseModule} from 'angularfire2/database';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public Recordingref:string = "/recordings";
  public messagesRef:string="/messages";
  constructor(private afDb: AngularFireDatabase,
    private auth:AuthService,
    private afStorage: AngularFireStorage) {}



    private initializeFirebaseRef(refName:string){
      return this.afDb.database.ref().child(refName);
    }

    public filterByName(key:string,name:string,lessons:Array<Object>):any{
      this.initializeFirebaseRef(this.Recordingref).orderByChild(key).equalTo(name)
      .on('child_added',(snapshot)=>{
        lessons.push(snapshot.val());
      });
    }

    public pushComments(message:string,sender:string,videoId:string,senderName:string){
      var database = this.initializeFirebaseRef(this.Recordingref).child(this.messagesRef)
      database.push({message:message,sender:sender,videoId:videoId,senderName:senderName})
    }

    public filterCommentsByVideo(key:string,VideoId:string,comments:Array<Object>){
      var database = this.initializeFirebaseRef(this.Recordingref).child(this.messagesRef).orderByChild(key).equalTo(VideoId);
      database.on('child_added',(snapshot)=>{
        console.log(snapshot.val());
        comments.push(snapshot.val());
      })
    }
    
}

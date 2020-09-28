import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireDatabase } from 'angularfire2/database'
import { User } from '../models/user';
import { AppState } from '../store/app.states';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class PeerconnectionService {

  public user:User;
  public yourId:string;
  public database:any
  constructor(private db: AngularFireDatabase) {
  
     this.database = this.db.database.ref()
  
    // this.user = this.auth.getUser();

    // if(this.user.role =='student'){
    //   this.store.select<>
    // }
   }


   sendMessage(senderId,data){
      var msg = this.database.push({ sender: senderId, message: data });
      msg.remove(); 
   }


   




}

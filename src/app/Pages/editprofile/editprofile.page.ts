import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Logout } from 'src/app/store/actions/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(private navController:NavController,private store:Store<AppState>, private auth:AuthService) { }

  title:string = "Profile";
  currentUser:any;
  ngOnInit() {
    // this.store.select<any>('users').subscribe(data=>{
    //   this.currentUser = data.authState.user
    // })
    this.currentUser = this.auth.getUser();
  }


  EditProfile(){
    
  }
  goBack(){
    this.navController.back();
  }

  
}

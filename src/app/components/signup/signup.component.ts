import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { SignUp } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  user:User = new User();
  public instructorOnly:boolean;
  constructor(private store:Store<AppState>,private platform:Platform) { 
  }

  ngOnInit() {
    if(this.platform.is('cordova')){
      this.instructorOnly = false
    }
    else{
      this.instructorOnly = true;
    }
    console.log(this.instructorOnly);
  }


  signUp(){
    if(this.platform.is('cordova')){
      const payload = {
        name: this.user.name,
        mobilenumber:this.user.mobilenumber,
        email:this.user.email,
        password:this.user.password,
        role:this.user.role
      }
      this.store.dispatch(new SignUp(payload))
  }
  else{
    const payload = {
      name: this.user.name,
      mobilenumber:this.user.mobilenumber,
      email:this.user.email,
      password:this.user.password,
      role:'instructor'
    }
    this.store.dispatch(new SignUp(payload))
  }
  }
}

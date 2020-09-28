import { Component, OnInit } from '@angular/core';
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
  constructor(private store:Store<AppState>) { }

  ngOnInit() {}


  signUp(){
    const payload = {
      name: this.user.name,
      mobilenumber:this.user.mobilenumber,
      email:this.user.email,
      password:this.user.password,
      role:this.user.role
    }
    this.store.dispatch(new SignUp(payload))
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

 public user:User;
  constructor(private store:Store<AppState>) { }
  ngOnInit() {
    this.user = new User();
  }


  login(){
    const payload = {
      email: this.user.email,
      password:this.user.password,
    }
    this.store.dispatch(new LogIn(payload))
  }
}

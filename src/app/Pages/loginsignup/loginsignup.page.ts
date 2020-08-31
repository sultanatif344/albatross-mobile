import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { LogIn, SignUp } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.page.html',
  styleUrls: ['./loginsignup.page.scss'],
})
export class LoginsignupPage implements OnInit {

  public flag: boolean;
  public position:string;
  user:User = new User();
  getState:Observable<any>;
  username:string;
  password:string;
  // @Output() onSignIn = new EventEmitter<string>();
  constructor(private router: Router,private store:Store<AppState>) {}

  ngOnInit() {
    this.flag = true;
    console.log(this.position);
    console.log(this.user.role);
  };

  switchToSignUp(){
    this.flag = false;
  }
  switchToSignIn(){
    this.flag = true;
  }


  login(){
    const payload = {
      email: this.user.email,
      password:this.user.password,
      role:this.user.role
    }
    this.store.dispatch(new LogIn(payload))
  }

// login(){
//   this.router.navigateByUrl('');
// }
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

  // signUp(){
  //   const payload = {
  //     name:this.user.name,
  //     number:this.user.number,
  //     email:this.user.email,
  //     password:this.user.password,
  //     role:this.user.role
  //   };
  //   this.store.dispatch(new Sign)
  // }
  // login(){
  //   const payload={
  //     email:this.user.email,
  //     password:this.user.password,
  //     role:this.user.role,
  //     token:this.user.token
  //   }
  //   this.store.dispatch(new LogIn(payload))
  // }

  navigateToWelcome(){
      this.router.navigateByUrl('welcome')
}

  // navigateToWelcome(){
  //   this.onSignIn.emit(this.position);
  //   this.router.navigateByUrl('welcome');
  // }

  selectposition(){
    console.log(this.user.role);
    console.log(this.user.name);
    console.log(this.user.mobilenumber);
    console.log(this.user.email);
    console.log(this.user.password);
  }



}

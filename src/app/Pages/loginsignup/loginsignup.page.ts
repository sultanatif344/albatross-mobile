import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { LogIn, LogInFailure, SignUp } from 'src/app/store/actions/auth.actions';
import { Observable, of } from 'rxjs';
import { catchError, retryWhen } from 'rxjs/operators';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';
// import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.page.html',
  styleUrls: ['./loginsignup.page.scss'],
})
export class LoginsignupPage implements OnInit {

  public flag: boolean;
  public position:string;
  
  getState:Observable<any>;

  public isError:string;
  // @Output() onSignIn = new EventEmitter<string>();
  constructor(private router: Router,private store:Store<AppState>) {
    this.store.select<any>('users').subscribe(data=>{
      // this.currentUser = data.authState.user;
      // console.log(this.currentUser);
      console.log(data.authState);
      this.isError = data.authState.errorMessage;
      console.log(this.isError);
      if(this.isError!=null){
      Swal.fire({
        title:'Authentication Failed',
        text:this.isError,
        icon:'error'
      }).then((val)=>{
        console.log(val);
      })
    }
    });
  }

  ngOnInit() {
    this.flag = true;
    console.log(this.position);
    
  };

  switchToSignUp(){
    this.flag = false;
  }
  switchToSignIn(){
    this.flag = true;
  }


  

// login(){
//   this.router.navigateByUrl('');
// }
  

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

  



}

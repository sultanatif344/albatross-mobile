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
  public loading:boolean;
  getState:Observable<any>;

  public isError:string;
  constructor(private router: Router,private store:Store<AppState>) {
    this.loading = false;
    this.store.select<any>('users').subscribe(data=>{
      this.isError = data.authState.errorMessage;
      this.loading = data.authState.loading;
      if(this.isError!=null){
      Swal.fire({
        title:'Authentication Failed',
        text:this.isError,
        icon:'error'
      }).then((val)=>{
        return val;
      })
    }
    });
  }

  ngOnInit() {
    this.flag = true;
  };

  switchToSignUp(){
    this.flag = false;
  }
  switchToSignIn(){
    this.flag = true;
  }


  



  navigateToWelcome(){
      this.router.navigateByUrl('welcome')
}


showLoadingOverlay(loading:boolean){
  return loading
}
  

  



}

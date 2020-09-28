import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    public auth: AuthService,
    public router:Router,
    private store:Store<AppState>
  ) { }


  canActivate(){
    this.store.select<any>('users').subscribe(data=>{
      if(data.authState.isAuthenticated===false&&!this.auth.getUser()){
        this.router.navigateByUrl('loginsignup');
        }
    })
   return true
  //  else{
  //    this.router.navigateByUrl('');
  //   return true;
  // }
  }

}

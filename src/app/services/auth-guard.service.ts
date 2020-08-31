import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(
    public auth: AuthService,
    public router:Router
  ) { }


  canActivate(){
   if(!this.auth.getToken()){
     this.router.navigateByUrl('loginsignup');
   }
   return true; 
  }

}

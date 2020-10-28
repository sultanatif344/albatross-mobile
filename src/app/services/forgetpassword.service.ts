import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  url:string;
  headers:HttpHeaders;
  constructor(private http:HttpClient,private router:Router) { }

  getCode(email:string):Observable<any>{
    this.url = 'https://albatross-v1.herokuapp.com/api/v1/auth/forgotpassword';

  return this.http.post(this.url,{email:email});
}

verifyresetCode(email:string,code:string){
  this.url = 'https://albatross-v1.herokuapp.com/api/v1/auth/verifyresetcode'

  return this.http.post(this.url,{resetPasswordCode:code,email:email});
}

updatePasswordAfterCodeReset(password:string){
  this.url = 'https://albatross-v1.herokuapp.com/api/v1/auth/updatepasswordaftercode'
  return this.http.post(this.url,{newPassword:password}).pipe(
    tap(()=>{
      this.router.navigateByUrl('loginsignup');
    })
  )
}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { AppState } from '../store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private store: Store<AppState>) { }

  private Register_URL = "https://albatross-v1.herokuapp.com/api/v1/auth/register";
  private Login_URL = "https://albatross-v1.herokuapp.com/api/v1/auth/login";

  getToken(){
    return localStorage.getItem('token');
  }

  logIn(email:string,password:string,role:string):Observable<any>{
      return this.http.post<User>(this.Login_URL,{email,password,role});
  }

  signUp(name:string,mobilenumber:string,email:string, password:string,role:string):Observable<User>{
    return this.http.post<User>(this.Register_URL,{name,mobilenumber,email,password,role});
  }
  logout(){
    localStorage.removeItem('token');
  }

}

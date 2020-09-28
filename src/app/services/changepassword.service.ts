import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppState } from '../store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(private http: HttpClient, private store:Store<AppState>) { }
  private ChangePassword_URL = "https://albatross-v1.herokuapp.com/api/v1/auth/updatepassword "
  UpdatePassword(body:object,token:string):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })    
    return this.http.put(this.ChangePassword_URL,body,{headers:headers})
  }
}

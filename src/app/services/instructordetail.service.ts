import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppState } from '../store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructordetailService {

  constructor(private http: HttpClient, private store:Store<AppState>) { }

  getInstructor(token:string,id:string):Observable<any>{
    let instructorDetail_URL = `https://albatross-v1.herokuapp.com/api/v1/instructor/${id}`;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })    
  return this.http.get(instructorDetail_URL,{headers:headers})
  // this.http.get()
  }
}

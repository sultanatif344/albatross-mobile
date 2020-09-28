import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentState } from '../studentstore/reducers/student.reducers';
import { Store } from '@ngrx/store';
import { Instructor } from '../models/instructor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorloadService {

  constructor(private http:HttpClient) { }

  // private instructorLoad_URL = `https://albatross-v1.herokuapp.com/api/v1/instructor/?name=`;
  

  
  
  loadInstructor(token:string,name:string):Observable<any>{
    let instructorLoad_URL = `https://albatross-v1.herokuapp.com/api/v1/instructor/?${name ? `name=${name}` : ''}`
    console.log("getting data...");
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })    
  return this.http.get<Array<Instructor>>(instructorLoad_URL,{headers:headers})

  
  }



}

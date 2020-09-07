import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ScheduledlessonsService } from './scheduledlessons.service';
import { ScheduledLessons } from '../models/scheduledlessons';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooklessonService {

  constructor(private http: HttpClient) { }

  private booklesson_URL = "https://albatross-v1.herokuapp.com/api/v1/lesson/booklesson";
  private getlesson_URL = "https://albatross-v1.herokuapp.com/api/v1/lesson/getlessonrequest"
  private headers:any;

  requestlesson(lessondetail:ScheduledLessons, token:string):Observable<any>{
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })   
   return this.http.post(this.booklesson_URL,lessondetail,{headers:this.headers})
  }
  getrequestedlesson(token:string):Observable<any>{
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })
  return this.http.get(this.getlesson_URL,{headers:this.headers})
  }
}

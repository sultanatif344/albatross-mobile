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

  getlessondetail(id:string,token:string):Observable<any>{
    let lessondetail_URL = `https://albatross-v1.herokuapp.com/api/v1/lesson/${id}`
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })
    return this.http.get(lessondetail_URL,{headers:this.headers})
    // 5f3fb384c1bc091d1cfcc64e
  }
  acceptOrDeclineLesson(id:string,payload:Object,token:string):Observable<any>{
    let lessonstatus_URL = `https://albatross-v1.herokuapp.com/api/v1/lesson/lessonstatus/${id}`
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  })
      return this.http.post(lessonstatus_URL,payload,{headers:this.headers})
  }
}

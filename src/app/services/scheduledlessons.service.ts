import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { ScheduledLessons } from '../models/scheduledlessons';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduledlessonsService {

  
  private LESSONS_URL ="https://albatross-v1.herokuapp.com/api/v1/lesson/getscheduledlesson"; 
  private headers:HttpHeaders;
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  token:any = () => {
    let token;
    this.store.select<any>('users').subscribe(data=>{
        token = data.authState.user.token
    })
    return token
}

  getLessons(token:string):Observable<any>{
      this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      })    
      return this.http.post<Array<ScheduledLessons>>(this.LESSONS_URL,null,{headers:this.headers})
}

getlessondetail(id:string,token:string):Observable<any>{
  let lessondetail_URL = `https://albatross-v1.herokuapp.com/api/v1/lesson/${id}`
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})
  return this.http.get(lessondetail_URL,{headers:this.headers})
}

acceptOrDeclineLesson(id:string,payload:Object,token:string):Observable<any>{
  let lessonstatus_URL = `https://albatross-v1.herokuapp.com/api/v1/lesson/lessonstatus/${id}`
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})
    return this.http.post(lessonstatus_URL,payload,{headers:this.headers})
}


getweekView(token:string,view:string,weekNo:string):Observable<any>{
  let lessonByWeek_URL = 'https://albatross-v1.herokuapp.com/api/v1/lesson/getlessonsbyView';
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})
return this.http.post<Array<Object>>(lessonByWeek_URL,{view:view,weekNo:weekNo},{headers:this.headers})
}

getDayView(token:string,view:string,dayNo:string,monthNo:string){
  let lessonByWeek_URL = 'https://albatross-v1.herokuapp.com/api/v1/lesson/getlessonsbyView';
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})
return this.http.post<Array<Object>>(lessonByWeek_URL,{view:view,dayNo:dayNo,monthNo:monthNo},{headers:this.headers})
}  
}




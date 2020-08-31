import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.states';
import { ScheduledLessons } from '../models/scheduledlessons';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledlessonsService {

  
  private LESSONS_URL ="http://albatross-v1.herokuapp.com/api/v1/lesson/getscheduledlesson"; 
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getLessons(token:string):Observable<any>{
        return this.http.post<Array<ScheduledLessons>>(this.LESSONS_URL,token);
  }
}

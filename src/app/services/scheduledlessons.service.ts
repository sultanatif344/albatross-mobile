import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getLessons(token:string):Observable<any>{
    
    console.log(token, 'token')
    console.log('comning here')
          
      let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      })    
      const test = this.http.post<Array<ScheduledLessons>>(this.LESSONS_URL,null,{headers:headers})
      console.log(test)
    //   var reqHeader = new HttpHeaders({ 
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + )
    //  });
      return test
}  
}
// data.authState.user.token   


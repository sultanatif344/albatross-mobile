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
  
  headers: HttpHeaders;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  token:any = () => {
    let token;
    this.store.select<any>('users').subscribe(data=>{
        console.log(data.authState.user.token)
        token = data.authState.user.token
    })
    return token
}

  getLessons(token:string):Observable<any>{
    
    console.log(token, 'token')
    console.log('comning here')
          
      this.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      })    
      const test = this.http.post<Array<ScheduledLessons>>(this.LESSONS_URL,null,{headers:this.headers})
      console.log(test)
    //   var reqHeader = new HttpHeaders({ 
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + )
    //  });
      return test
}
getweekView(token:string,view:string,weekNo:string):Observable<any>{
  let lessonByWeek_URL = 'https://albatross-v1.herokuapp.com/api/v1/lesson/getlessonsbyView';
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})
// let params = new HttpParams();
// params = params.append('var1', val1);
// params = params.append('var2', val2);    
return this.http.post<Array<Object>>(lessonByWeek_URL,{view:view,weekNo:weekNo},{headers:this.headers})
}
getDayView(token:string,view:string,dayNo:string,monthNo:string){
  let lessonByWeek_URL = 'https://albatross-v1.herokuapp.com/api/v1/lesson/getlessonsbyView';
  this.headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+token                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
})
// let params = new HttpParams();
// params = params.append('var1', val1);
// params = params.append('var2', val2);    
return this.http.post<Array<Object>>(lessonByWeek_URL,{view:view,dayNo:dayNo,monthNo:monthNo},{headers:this.headers})
}  
}
// data.authState.user.token   


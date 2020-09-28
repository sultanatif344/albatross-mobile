import { Component, OnInit } from '@angular/core';
import { BooklessonService } from 'src/app/services/booklesson.service';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AcceptRequestFailure, AcceptRequestSuccess, DeclineRequestFailure, DeclineRequestSuccess } from 'src/app/Instructorstore/Actions/Instructor.actions';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-instructorlessons',
  templateUrl: './instructorlessons.component.html',
  styleUrls: ['./instructorlessons.component.scss'],
})
export class InstructorlessonsComponent implements OnInit {

  public requestedlessons:Array<object>;
  public lessonStatus:Object;
  constructor(private booklessonservice:BooklessonService,private store:Store<AppState>,private auth:AuthService) { 
  }

  ngOnInit() {
    this.store.select<any>('users').subscribe(data =>{})  
    this.getLessons();  
  }

  getLessons(){
    this.booklessonservice.getrequestedlesson(this.auth.getToken())
      .subscribe(data=>{
        console.log(data);
        this.requestedlessons = data.data;
        console.log(this.requestedlessons);
      })
  }

  acceptLesson(event){
    this.lessonStatus={
      lessonBookStatus: "accept"
    }
    this.store.select<any>('users').subscribe(data=>{})
    this.booklessonservice.acceptOrDeclineLesson(event._id,this.lessonStatus,this.auth.getToken())
    .subscribe(data=>{
      console.log(data)
      this.store.dispatch(new AcceptRequestSuccess(data))
      catchError(error=>of(new AcceptRequestFailure(error))
    )
  })
}

  declineLesson(event){
    this.lessonStatus={
      lessonBookStatus: "decline"
    }
    this.store.select<any>('users').subscribe(data=>{})
    this.booklessonservice.acceptOrDeclineLesson(event._id,this.lessonStatus,this.auth.getToken()).subscribe(data=>{
      console.log(data);
      this.store.dispatch(new DeclineRequestSuccess(data))
      catchError(error=>of(new DeclineRequestFailure(error))
    )
  })
  }
}

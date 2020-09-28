import { Component, OnInit } from '@angular/core';
import { BooklessonService } from 'src/app/services/booklesson.service';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AcceptRequestFailure, AcceptRequestSuccess, DeclineRequestFailure, DeclineRequestSuccess } from 'src/app/Instructorstore/Actions/Instructor.actions';
import { catchError } from 'rxjs/operators';
<<<<<<< HEAD
import { AuthService } from 'src/app/services/auth.service';
=======
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c

@Component({
  selector: 'app-instructorlessons',
  templateUrl: './instructorlessons.component.html',
  styleUrls: ['./instructorlessons.component.scss'],
})
export class InstructorlessonsComponent implements OnInit {

  public requestedlessons:Array<object>;
  public lessonStatus:Object;
<<<<<<< HEAD
  constructor(private booklessonservice:BooklessonService,private store:Store<AppState>,private auth:AuthService) { 
  }
=======
  constructor(private booklessonservice:BooklessonService,private store:Store<AppState>) { }
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c

  ngOnInit() {
    this.store.select<any>('users').subscribe(data =>{})  
    this.getLessons();  
  }

  getLessons(){
    this.booklessonservice.getrequestedlesson(this.auth.getToken())
      .subscribe(data=>{
<<<<<<< HEAD
        console.log(data);
        this.requestedlessons = data.data;
        console.log(this.requestedlessons);
      })
=======
        this.requestedlessons = data.data;
        console.log(this.requestedlessons);
      })    
    })
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
  }

  acceptLesson(event){
    this.lessonStatus={
      lessonBookStatus: "accept"
    }
<<<<<<< HEAD
    this.store.select<any>('users').subscribe(data=>{})
    this.booklessonservice.acceptOrDeclineLesson(event._id,this.lessonStatus,this.auth.getToken())
=======
    this.store.select<any>('users').subscribe(data=>{
    this.booklessonservice.acceptOrDeclineLesson(event._id,this.lessonStatus,data.authState.user.token)
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
    .subscribe(data=>{
      console.log(data)
      this.store.dispatch(new AcceptRequestSuccess(data))
      catchError(error=>of(new AcceptRequestFailure(error))
    )
  })
<<<<<<< HEAD
=======
  })
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
}

  declineLesson(event){
    this.lessonStatus={
      lessonBookStatus: "decline"
    }
<<<<<<< HEAD
    this.store.select<any>('users').subscribe(data=>{})
    this.booklessonservice.acceptOrDeclineLesson(event._id,this.lessonStatus,this.auth.getToken()).subscribe(data=>{
      console.log(data);
=======
    this.store.select<any>('users').subscribe(data=>{
    this.booklessonservice.acceptOrDeclineLesson(event._id,this.lessonStatus,data.authState.user.token)
    .subscribe(data=>{
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
      this.store.dispatch(new DeclineRequestSuccess(data))
      catchError(error=>of(new DeclineRequestFailure(error))
    )
  })
<<<<<<< HEAD
=======
  })
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
  }
}

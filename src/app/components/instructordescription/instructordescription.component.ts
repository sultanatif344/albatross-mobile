import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { RequestInstructor, RequestInstructorSuccess, RequestInstructorFailure } from 'src/app/studentstore/actions/student.actions';
import { BooklessonService } from 'src/app/services/booklesson.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-instructordescription',
  templateUrl: './instructordescription.component.html',
  styleUrls: ['./instructordescription.component.scss'],
})
export class InstructordescriptionComponent implements OnInit {


  @Input() instructorDescription:any
  @Input() id: string
  public scheduleLesson : any
  constructor(private router:Router,private store:Store<AppState>, private requestlessonservice:BooklessonService) { }

  ngOnInit() {
    console.log(this.instructorDescription);
    console.log(this.id);
  }



  requestLesson(id){
    this.scheduleLesson = {
        lesson:{
        lessonStartTime : "2020-08-21T11:25:27.487+00:00",
        lessonEndTime: "2020-08-21T11:25:27.487+00:00",
        lessonDate: "2020-08-21T11:25:27.487+00:00",
        lessonAssignedTo: id,
        description: "This is lesson one"
      }
    }
    this.store.select<any>('users').subscribe(data=>{
      this.requestlessonservice.requestlesson(this.scheduleLesson,data.authState.user.token)
      .subscribe(data=>{
        this.store.dispatch(new RequestInstructorSuccess(data))
        catchError(error=>of(new RequestInstructorFailure(error)))
      })
    })
  }


  goToLessonRequest(){
    this.router.navigateByUrl('lessonrequest');
  }
}

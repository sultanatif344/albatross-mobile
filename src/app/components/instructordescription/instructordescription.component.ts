import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { RequestInstructor, RequestInstructorSuccess, RequestInstructorFailure } from 'src/app/studentstore/actions/student.actions';
import { BooklessonService } from 'src/app/services/booklesson.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-instructordescription',
  templateUrl: './instructordescription.component.html',
  styleUrls: ['./instructordescription.component.scss'],
})
export class InstructordescriptionComponent implements OnInit {


  
  constructor(private router:Router,private store:Store<AppState>, private requestlessonservice:BooklessonService,private auth:AuthService) { }
  @Input() instructorDescription:any
  @Input() id: string
  @Input() scheduledLessonFullStartAndEndDate:any;
  @Output() displayTimerOverlay=new EventEmitter<boolean>();
  @Output() displayDatePickerOverlay=new EventEmitter<boolean>();
  

  public scheduleLesson : any
  public flag:boolean
  public overlayHidden:boolean;
  
  ngOnInit() {
    console.log(this.instructorDescription);
    console.log(this.id);
    this.scheduledLessonFullStartAndEndDate = {
      fullStartDate:'',
      fullEndDate:''
    }
    // this.displayTimerOverlay = new EventEmitter<boolean>();
   
  }



  requestLesson(id){
    var startTime = this.scheduledLessonFullStartAndEndDate?.fullStartDate
    var endTime = this.scheduledLessonFullStartAndEndDate?.fullEndDate
    this.scheduleLesson = {
        lesson:{
        lessonStartTime : startTime,
        lessonEndTime: endTime,
        lessonDate: startTime,
        lessonAssignedTo: id,
        description: "This is lesson one"
      }
    }

    console.log(this.scheduleLesson);
    this.store.select<any>('users').subscribe(data=>{})
      this.requestlessonservice.requestlesson(this.scheduleLesson,this.auth.getToken())
      .subscribe(data=>{
        console.log(data);
        this.store.dispatch(new RequestInstructorSuccess(data))
        catchError(error=>of(new RequestInstructorFailure(error)))
      })
  }


  setFlag(){
    this.flag = true;
    this.displayTimerOverlay.emit(this.flag);
    console.log(this.flag);
  }


  goToLessonRequest(){
    this.router.navigateByUrl('lessonrequest');
  }

  displayCalendar(){
    this.overlayHidden = false;
    console.log("Calendar Showing");
    this.displayDatePickerOverlay.emit(this.overlayHidden);
  }

  
}

import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { InstructordetailService } from 'src/app/services/instructordetail.service';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { Instructor } from 'src/app/models/instructor';
import { InstructorState } from 'src/app/Instructorstore/Reducer/Instructor.reducer';
import { RequestInstructor } from 'src/app/studentstore/actions/student.actions';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
@Component({
  selector: 'app-lessonrequest',
  templateUrl: './lessonrequest.page.html',
  styleUrls: ['./lessonrequest.page.scss'],
})
export class LessonrequestPage implements OnInit {

  public instructorDetail:Instructor;
  public selectedInstructor:Instructor;
  public id?: string;
  public instructorID?:string;
  public flag:boolean;
  public overlayHidden:boolean;
  public lessonStartTime:string;
  public lessonEndTime:string;
  public lessonDate:string;
  public fullStartDate:string;
  public fullEndDate:string;
  public scheduledLessonFullStartAndEndDate:Object;
  constructor(private navController: NavController, private router:ActivatedRoute,
    private instructorDetailsService:InstructordetailService,
    private store:Store<AppState>,
    private auth:AuthService) { }

    ngOnInit() {
    this.router.params.subscribe(async data=>{
      this.id = data.id;
      console.log(data);
    this.displaydetails(data.id)
  })
  this.overlayHidden = true;
  this.instructorDetail = this.selectedInstructor
  console.log(this.instructorDetail);
  }
   goBack(){
      this.navController.back();
   }

  displaydetails(id){
    this.instructorDetailsService.getInstructor(this.auth.getToken(),id)
    .subscribe( data=>{
      this.instructorID = data.data.user._id
      this.selectedInstructor= data.data;
      console.log(this.selectedInstructor);
    })
   }

   displayTimer(event){
     this.flag = event;
     console.log(this.flag);
   }

   public hideOverlay() {
    this.overlayHidden = true;
  }

  unhideCalendar(event){
    this.overlayHidden = event;
  }

  unsetflag(){
    this.flag = false;
  }

  onDateSelect(event){
    console.log(event);

    this.lessonDate = moment({year:event.year,month:event.month-1,day:event.day}).format('YYYY-MM-DD');

    console.log(this.lessonDate);

    
    
  }


  selectTime(event){
    this.lessonStartTime = moment(event.startTime).format('HH:MM:SSZ');
    this.lessonEndTime = moment(event.endTime).format('HH:MM:SSZ');
    this.fullStartDate = this.lessonDate+'T'+this.lessonStartTime
    this.fullEndDate = this.lessonDate+'T'+this.lessonEndTime
    
    this.scheduledLessonFullStartAndEndDate = {
      fullStartDate: this.fullStartDate,
      fullEndDate: this.fullEndDate
    }
  }


}

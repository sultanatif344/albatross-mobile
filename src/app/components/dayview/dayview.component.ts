import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { GetScheduledLessons } from 'src/app/scheduledlessons/actions/scheduledlessons.actions';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';
import { Observable } from 'rxjs';
import { scheduledlessonsState } from 'src/app/scheduledlessons/reducers/scheduledlessons.reducer';
import * as moment from 'moment';
import { ThrowStmt } from '@angular/compiler';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.scss'],
})
export class DayviewComponent implements OnInit {

<<<<<<< HEAD
  @Input()scheduledLessons:Array<ScheduledLessons>=[];
  private startTime: string;
  private endTime:string;
  private user:Object;
  id: string;
  @Output() navigateToLessonDetails_Event = new EventEmitter();
  constructor(private router: Router, private store:Store<scheduledlessonsState>,private auth:AuthService) { 
    // this.store.dispatch(new GetScheduledLessons())
    // this.store.select<any>('scheduledlessons').subscribe(data=>{
    //   console.log(data.list);
    //   this.scheduledLessons = data.list.data;
    //   console.log(this.scheduledLessons);
    // });
    
  }
  
  // ionViewWillEnter(){
  //   this.user= this.auth.getUser();
  // }
=======
  public scheduledLessons:Array<ScheduledLessons>;
  @Output() navigateToLessonDetails_Event = new EventEmitter();
  @Input() dayLessons:Array<Object>
  id: string;
  constructor(private router: Router, private store:Store<scheduledlessonsState>) { }

>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
  ngOnInit() {
    this.user = this.auth.getUser();
      // console.log(data.authState.user.token)
<<<<<<< HEAD

    // this.scheduledLessons.subscribe(data=>{
    //   data.forEach(lesson=>{
    //     this.startTime = moment(lesson.lessonStartTime,).format('HH:mm');
    //   })
    // })
    // console.log(this.startTime);
=======
      this.store.dispatch(new GetScheduledLessons())
    this.store.select<any>('scheduledlessons').subscribe(data=>{
      this.scheduledLessons = data.list;
      console.log(this.scheduledLessons);
    });
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
    // this.scheduledLessons.subscribe(data=>{
    //   console.log(data);
    // })
  }


  goToLessonRequest(event){
    this.id = event._id
    console.log(this.id);    
    this.router.navigateByUrl(`/lessondetails/${this.id}`);
  }

<<<<<<< HEAD
  goToLessonRequest(event){
    this.id = event._id
    console.log(this.id);    
    this.router.navigateByUrl(`/lessondetails/${this.id}`);
  }
=======
  // onClick(){
  //   this.navigateToLessonDetails_Event.emit()
  // }
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
  
}

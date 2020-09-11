import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GetScheduledLessons } from 'src/app/scheduledlessons/actions/scheduledlessons.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { ModalController } from '@ionic/angular';
import { ScheduledlessonsService } from 'src/app/services/scheduledlessons.service';
// import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';
// import { App } from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public flag: boolean;
  public showScheduleBar:boolean;
  public SearchBarVisible:boolean;
  public showBackButton:boolean;
  public calendar_is_active:boolean
  public id?:string;
  public weekViewLessons:Array<Object>;
  public dayViewLessons:Array<Object>;
  constructor(private router: Router, private navController: NavController, private store:Store<AppState>,private scheduledLessonsService:ScheduledlessonsService) {}

  ngOnInit(){ 
    this.flag = true;
    this.showScheduleBar = true;
      this.store.dispatch(new GetScheduledLessons())
    // this.calendar_is_active
    // console.log(this.date);
  }
  
  setFlag(event){
    this.flag = event;
    console.log(event);
    this.store.select<any>('users').subscribe(data=>{
      this.scheduledLessonsService.getDayView(data.authState.user.token,"day","2","1")
      .subscribe(data=>{
        this.dayViewLessons = data
        console.log(this.dayViewLessons);
      })
    })
  }

  unsetFlag(event){
    this.flag = event;
    this.store.select<any>('users').subscribe(data=>{
    this.scheduledLessonsService.getweekView(data.authState.user.token,"week","2")
    .subscribe(data=>{
      this.weekViewLessons = data.data
      console.log(this.weekViewLessons);
    })
  })
  }

  activateCalendar(event){
    this.calendar_is_active = event;
  }
 
  // navigateToLessonDetailPage(id:string){
  //   this.router.navigateByUrl(`/lessondetails/${id}`);
  // }

  // onChange($event) {
  // this.date = new Date($event);
  // console.log(this.date);    
  // }

  getweekLessons(){

  }  
}

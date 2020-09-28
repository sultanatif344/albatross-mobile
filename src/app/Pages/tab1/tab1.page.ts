import { Component, EventEmitter, NgZone, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GetScheduledLessons } from 'src/app/scheduledlessons/actions/scheduledlessons.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { NgbCalendar, NgbDate, NgbDatepicker, NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ScheduledlessonsService } from 'src/app/services/scheduledlessons.service';
import { AuthService } from 'src/app/services/auth.service';
// import { App } from '@ionic/angular'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  model: NgbDateStruct;
  date: { year: number, month: number, };
  @ViewChild('dp') dp: NgbDatepicker;

  public flag: boolean;
  public showScheduleBar:boolean;
  public SearchBarVisible:boolean;
  public showBackButton:boolean;
  public selectedDays: Array<number>;
  public fromDate: NgbDate;
  public toDate: NgbDate;
  public view: string;
  public dates:Array<object>;
  public dayArray:Array<object>=[{}];
  private dayNo:string;
  private monthNo:string;
  // private weekNo:Number;
  

  @Output() dateSelect = new EventEmitter<NgbDateStruct>();
  overlayHidden: boolean = true;
  constructor(
    private router: Router, 
    private navController: NavController, 
    private store:Store<AppState>,
    private calendar: NgbCalendar,
    private scheduledLessonsService:ScheduledlessonsService,
    private auth:AuthService,
    private NgbDateConfig:NgbDatepickerConfig,
    private zone:NgZone
    ) 
    {
      // this.store.dispatch(new GetScheduledLessons())     
    }




  public hideOverlay() {
    this.overlayHidden = true;
  }
  public displayCalendarModal(event){
    this.overlayHidden = event;    
  }
  
  
  ngOnInit(){
    this.flag = true;
    this.showScheduleBar = true;
     
    console.log(this.date)
    this.setView();
   
    var date = new Date() 
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    this.fromDate = new NgbDate(year,month,day);
    this.toDate = new NgbDate(year,month,day+5);
    // console.log(this.calendar.getWeekNumber();
    this.dates = this.getDates(new Date(this.fromDate.year,this.fromDate.month-1,this.fromDate.day), new Date(this.toDate.year,this.toDate.month-1,this.toDate.day));
    this.store.select<any>('scheduledlessons').subscribe((data)=>{
      this.dayArray = data.list.data
      console.log(this.dayArray);
    })
    // this.scheduledLessonsService.getLessons(this.auth.getToken()).subscribe(data=>{
    //   this.dayArray = data;
    // })    
  }
  setFlag(event){
    this.flag = event;
    this.view = 'day';
    console.log(event);
  }
  unsetFlag(event){
    this.view = 'week';
    this.flag = event;
  }
  navigateToLessonDetailPage(){
    this.router.navigateByUrl("lessondetails");
  }

  navigateEvent($event){
    console.log(this.date);
    console.log($event);
  }


  onDateSelect($event){
    console.log($event);
    this.monthNo = $event.month
    this.dayNo = $event.day;
    if(parseInt(this.monthNo)<10){
      this.monthNo = '0'+$event.month
      
    }
    if($event.day<10){
      this.dayNo = '0'+$event.day
      console.log(this.dayNo);
    }
    else{
      this.monthNo = '0'+$event.month
      this.dayNo = ''+$event.day
    }
    this.fromDate = $event
    this.toDate =this.calendar.getNext(this.fromDate,'d',6);
  let date = moment($event).toDate();
  console.log(date);
  // this.weekNo = Math.ceil(date.getDate()/7)
  // this.scheduledLessonsService.getweekView(this.auth.getToken(),this.view,this.weekNo)
  //       .subscribe(data=>{
  //       console.log(data)
  //        })
  // console.log(moment(new Date(this.NgbDateConfig.firstDayOfWeek.toLocaleString(new Date($event).toDateString()))).toDate());
  this.NgbDateConfig.startDate = {year:$event.year,month:$event.month}
  if(this.view == 'day'){
    this.dates = this.getDates(new Date(this.fromDate.year,this.fromDate.month-1,this.fromDate.day), new Date(this.toDate.year,this.toDate.month-1,this.toDate.day));                                                                                                           
  }
  
  
}
    

getDates(startDate, endDate) {
      var dates = [],
          currentDate = startDate,
          addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
          };
      while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate,1);
      }
      return dates;
      
}


    
    
  

  setView(){
    switch (this.flag) {
      case true:
          this.view = 'day'
          
        break;

      case false:
          this.view = 'week'
        break;

      default:
        break;
    }
  }

  getWeeks(startDate:Date , n){
    var date = new Date(startDate.setDate(startDate.getDate()+(n * 7)));
    return date
  }

  getDayData(event){
    console.log(event)
    console.log(this.view);
   this.scheduledLessonsService.getDayView(this.auth.getToken(),this.view,event.dayNo,event.monthNo).subscribe((data:any)=>{
     this.dayArray = data.data;
   }) 
  }
  
  // onNavigate(event) {
  //   //console.log(event)
  //   const targetMonth = event.next.month;
  //   const targetYear = event.next.year;
  //   const selectedDay = 1;
  //   this.selectedDate = {
  //     year:targetYear,
  //     month: targetMonth,
  //     day:selectedDay
  //   }
  // }
}

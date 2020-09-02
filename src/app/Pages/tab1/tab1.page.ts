import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GetScheduledLessons } from 'src/app/scheduledlessons/actions/scheduledlessons.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
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
  constructor(private router: Router, private navController: NavController, private store:Store<AppState>) {}

  ngOnInit(){ 
    this.flag = true;
    this.showScheduleBar = true;
      this.store.dispatch(new GetScheduledLessons())
   
  }
  
  setFlag(event){
    this.flag = event;
    console.log(event);
  }

  unsetFlag(event){
    this.flag = event;
  }
  navigateToLessonDetailPage(){
    this.router.navigateByUrl("lessondetails");
  }
}

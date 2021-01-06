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

  @Input()scheduledLessons:Array<ScheduledLessons>=[];
  public startTime: string;
  public endTime:string;
  public user:any;
  id: string;
  @Output() navigateToLessonDetails_Event = new EventEmitter();
  constructor(private router: Router, private store:Store<scheduledlessonsState>,private auth:AuthService) { 
    this.user = this.auth.getUser();
  }
  ngOnInit() {
  }


  goToLessonRequest(event){
    this.id = event._id
    this.router.navigateByUrl(`/lessondetails/${this.id}`);
  }
  
}

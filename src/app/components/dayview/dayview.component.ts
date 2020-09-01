import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { GetScheduledLessons } from 'src/app/scheduledlessons/actions/scheduledlessons.actions';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';
import { Observable } from 'rxjs';
import { scheduledlessonsState } from 'src/app/scheduledlessons/reducers/scheduledlessons.reducer';


@Component({
  selector: 'app-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.scss'],
})
export class DayviewComponent implements OnInit {

  scheduledLessons:Observable<Array<ScheduledLessons>>;
  @Output() navigateToLessonDetails_Event = new EventEmitter();
  constructor(private router: Router, private store:Store<scheduledlessonsState>) { }

  ngOnInit() {
      // console.log(data.authState.user.token)
      this.store.dispatch(new GetScheduledLessons())
    this.store.select<any>('scheduledlessons').subscribe(data=>{
      console.log(data);
    });
    // this.scheduledLessons.subscribe(data=>{
    //   console.log(data);
    // })
  }




  onClick(){
    this.navigateToLessonDetails_Event.emit()
  }
  
}

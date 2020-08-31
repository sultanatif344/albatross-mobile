import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { GetScheduledLessons } from 'src/app/store/actions/scheduledlessons.actions';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dayview',
  templateUrl: './dayview.component.html',
  styleUrls: ['./dayview.component.scss'],
})
export class DayviewComponent implements OnInit {

  scheduledLessons:Observable<Array<ScheduledLessons>>;
  @Output() navigateToLessonDetails_Event = new EventEmitter();
  constructor(private router: Router, private store:Store<AppState>) { }

  ngOnInit() {
    // this.store.select<any>('users').subscribe( data=>
    //   this.store.dispatch(new GetScheduledLessons(data.authState.token))
    // )
    
    // this.scheduledLessons = this.store.select(store => store.scheduledlessonsState.list);

    // this.scheduledLessons.subscribe(data=>{
    //   console.log(data);
    // })
  }




  onClick(){
    this.navigateToLessonDetails_Event.emit()
  }
  
}

import { Component, Input, OnInit, Output } from '@angular/core';
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

  public scheduledLessons:Array<ScheduledLessons>;
  @Output() navigateToLessonDetails_Event = new EventEmitter();
  @Input() dayLessons:Array<Object>
  id: string;
  constructor(private router: Router, private store:Store<scheduledlessonsState>) { }

  ngOnInit() {
      // console.log(data.authState.user.token)
      this.store.dispatch(new GetScheduledLessons())
    this.store.select<any>('scheduledlessons').subscribe(data=>{
      this.scheduledLessons = data.list;
      console.log(this.scheduledLessons);
    });
    // this.scheduledLessons.subscribe(data=>{
    //   console.log(data);
    // })
  }


  goToLessonRequest(event){
    this.id = event._id
    console.log(this.id);    
    this.router.navigateByUrl(`/lessondetails/${this.id}`);
  }

  // onClick(){
  //   this.navigateToLessonDetails_Event.emit()
  // }
  
}

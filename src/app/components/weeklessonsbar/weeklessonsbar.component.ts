import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';

@Component({
  selector: 'app-weeklessonsbar',
  templateUrl: './weeklessonsbar.component.html',
  styleUrls: ['./weeklessonsbar.component.scss'],
})
export class WeeklessonsbarComponent implements OnInit {

  @Input()weekDates:Array<any>=[{}];

  @Output() emitWeekNo = new EventEmitter<string>();
  weekNo:string;
  constructor() {}

  
  ngOnInit() {
    console.log(this.weekDates);
  }

  getWeekNo(event){
    this.weekNo = event;
    console.log(this.weekNo);
    this.emitWeekNo.emit(this.weekNo);
  }

}

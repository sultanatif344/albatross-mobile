import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-lessons-bar',
  templateUrl: './lessons-bar.component.html',
  styleUrls: ['./lessons-bar.component.scss'],
})
export class LessonsBarComponent implements OnInit {

  @Input() dates:Array<object>;
  @Output() dateEmitEvent = new EventEmitter<Object>()
  private selectedDate:Object;
  public flag:boolean;
  constructor() { }

  ngOnInit() {

  }

  catchandSendSelectedDayAndMonthNo(date){
    this.flag = true;
    const day = moment(date).format('DD');
    const month = moment(date).format('MM');
    this.selectedDate ={
      dayNo:day,
      monthNo:month
    }
    this.dateEmitEvent.emit(this.selectedDate);    
  }

}

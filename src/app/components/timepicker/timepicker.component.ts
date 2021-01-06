import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
})
export class TimepickerComponent{

  public startTime:NgbTimeStruct={hour:12,minute:30,second:10};
  public endTime:NgbTimeStruct={hour:12,minute:30,second:10};
  constructor() { }


  public realStartTime:any;
  public realEndTime:any;
  public startSeconds:boolean;
  
  public endSeconds:boolean;
  @Output() startAndEndTimeEmit = new EventEmitter<Object>()
  public startAndEndTime:Object

  ngOnInit() {
    this.startSeconds = true;
    this.endSeconds = true;
  }

  onClick(){
    this.startAndEndTime = {
      startTime:this.startTime,

      endTime:this.endTime
    }
    this.startAndEndTimeEmit.emit(this.startAndEndTime);
  }

}

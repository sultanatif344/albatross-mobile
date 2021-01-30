import { Component, EventEmitter, Output } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
})
export class TimepickerComponent{

  public startTime:NgbTimeStruct={hour:12,minute:30,second:10};
  public endTime:NgbTimeStruct={hour:12,minute:30,second:10};
  public startSeconds:boolean;
  
  public endSeconds:boolean;
  constructor() { 
    this.startSeconds = true;
    this.endSeconds = true;
  }
  @Output() startAndEndTimeEmit = new EventEmitter<Object>()
  public startAndEndTime:Object;

  ngOnInit() {
  }

  onClick(){
    this.startAndEndTime = {
      startTime:this.startTime,

      endTime:this.endTime
    }
    this.startAndEndTimeEmit.emit(this.startAndEndTime);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
})
export class TimepickerComponent implements OnInit {

  
  constructor() { }


  public startTime:Object;
  public startSeconds:boolean;
  public endTime:Object;
  public endSeconds:boolean;
  @Output() startAndEndTimeEmit = new EventEmitter<Object>()
  public startAndEndTime:Object

  ngOnInit() {
    this.startTime = {hour: 13, minute: 30, second:30};
    this.startSeconds = true;
  

    this.endTime = {hour: 13, minute: 30, second:30};

    this.startAndEndTime = {
      startTime:this.startTime,

      endTime:this.endTime
    }
    this.endSeconds = true;
  }

  onClick(){
    this.startAndEndTimeEmit.emit(this.startAndEndTime);
    console.log('emitting');
  }

}

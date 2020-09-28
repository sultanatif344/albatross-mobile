<<<<<<< HEAD
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

=======
import { Component, OnInit, Output, Input } from '@angular/core';
import * as moment from 'moment';
import { identifierModuleUrl } from '@angular/compiler';
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
@Component({
  selector: 'app-details-oflessons',
  templateUrl: './details-oflessons.component.html',
  styleUrls: ['./details-oflessons.component.scss'],
})
export class DetailsOflessonsComponent implements OnInit {

  @Input() lessonDetail:any;
  constructor() { }

<<<<<<< HEAD
  @Input() lessonDetail:Observable<Array<any>>;
  @Output() callingEvent = new EventEmitter<boolean>();
  public callScreenIsActive:boolean;
  ngOnInit() {
    this.callScreenIsActive = false;
  }

  displayCallOverlay(){
    this.callScreenIsActive = true;
    this.callingEvent.emit(this.callScreenIsActive);
  }
=======
 ngOnInit() {
    if(this.lessonDetail!=null){
    console.log(this.lessonDetail.lessonEndTime);
    console.log(moment(this.lessonDetail.lessonEndTime,'DD/MM/YYYY'));
  }
    // console.log(this.lessonDetail);
  }


>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c

}

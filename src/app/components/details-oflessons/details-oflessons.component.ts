import { Component, OnInit, Output, Input } from '@angular/core';
import * as moment from 'moment';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-details-oflessons',
  templateUrl: './details-oflessons.component.html',
  styleUrls: ['./details-oflessons.component.scss'],
})
export class DetailsOflessonsComponent implements OnInit {

  @Input() lessonDetail:any;
  constructor() { }

 ngOnInit() {
    if(this.lessonDetail!=null){
    console.log(this.lessonDetail.lessonEndTime);
    console.log(moment(this.lessonDetail.lessonEndTime,'DD/MM/YYYY'));
  }
    // console.log(this.lessonDetail);
  }



}

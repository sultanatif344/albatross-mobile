import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-oflessons',
  templateUrl: './details-oflessons.component.html',
  styleUrls: ['./details-oflessons.component.scss'],
})
export class DetailsOflessonsComponent implements OnInit {

  constructor() { }

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

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-details-oflessons',
  templateUrl: './details-oflessons.component.html',
  styleUrls: ['./details-oflessons.component.scss'],
})
export class DetailsOflessonsComponent implements OnInit {

  // @Input() lessonDetail:any;
  constructor(private auth: AuthService) { 
    this.role=this.auth.getUser().role;
  }

  @Input() lessonDetail:any;
  @Output() callingEvent = new EventEmitter<boolean>();
  public role:string;
  public callScreenIsActive:boolean;
  ngOnInit() {
    this.callScreenIsActive = false;
  }

  displayCallOverlay(){
    this.callScreenIsActive = true;
    this.callingEvent.emit(this.callScreenIsActive);
  }

}

import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { InstructorloadService } from 'src/app/services/instructorload.service';
import { AppState } from 'src/app/store/app.states';
import { LoadInstructorListSuccess } from 'src/app/studentstore/actions/student.actions';
import { LoadInstructorListFailure } from 'src/app/studentstore/actions/student.actions';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  calendar_is_active: boolean;

  constructor(private navController:NavController, private instructorService:InstructorloadService, private auth:AuthService,private store:Store<AppState>) { }
  @Input() showScheduleBar:boolean; 
  @Input() showBackButton: boolean;
  @Input() SearchBarVisible: boolean;
  @Input() title:string;
  @Input() showTitle:boolean;
  @Input() selectedDate:any;
  public name:string;
  @Output() switchView=new EventEmitter<boolean>();
  @Output() searchResultEvent = new EventEmitter<Array<Object>>();
  @Output() calendarModalDisplayEvent = new EventEmitter<boolean>();
  @Output() onActivateCalendar = new EventEmitter<boolean>();
  flag : boolean;
  overlayHidden:boolean;
  public buttonState:boolean;
  ngOnInit() {
    this.calendar_is_active = false;
    this.buttonState = true;
  }

  goBack(){
    this.navController.back();
  }

  // onClick(){
  //   this.switchView.emit("switchToDayView");
  // }
  ActivateCalendar(){
    this.calendar_is_active = !this.calendar_is_active;
    this.onActivateCalendar.emit(this.calendar_is_active);
  }
  switchToWeekView(){
    this.flag = false; 
    this.switchView.emit(this.flag);
    this.disableBtnState();
  }

  switchToDayView(){
    this.flag = true; 
    this.switchView.emit(this.flag);
    this.activateBtnState()
  }

  displayCalendar(){
    this.overlayHidden = false;
    this.calendarModalDisplayEvent.emit(this.overlayHidden);
  }

  SearchInstructor(){
    this.instructorService.loadInstructor(this.auth.getToken(),this.name).subscribe(data=>{
      this.searchResultEvent.emit(data.data);
    })
  }

  disableBtnState(){
    this.buttonState=false;
  }

  activateBtnState(){
    this.buttonState = true;
  }

}

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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private navController:NavController, private instructorService:InstructorloadService, private auth:AuthService,private store:Store<AppState>) { }
  @Input() showScheduleBar:boolean; 
  @Input() showBackButton: boolean;
  @Input() SearchBarVisible: boolean;
  @Input() title:string;
  @Input() showTitle:boolean;
  @Output() switchView=new EventEmitter<boolean>();
  @Output() searchResultEvent = new EventEmitter<Array<Object>>();
  @Output() calendarModalDisplayEvent = new EventEmitter<boolean>();
  flag : boolean;
  public name:string;
  overlayHidden:boolean;
  ngOnInit() {
    
  }

  goBack(){
    this.navController.back();
  }

  // onClick(){
  //   this.switchView.emit("switchToDayView");
  // }

  switchToWeekView(){
    this.flag = false; 
    this.switchView.emit(this.flag);
    console.log("event fired");
  }

  switchToDayView(){
    this.flag = true; 
    this.switchView.emit(this.flag);
    console.log("event fired");
  }

  displayCalendar(){
    this.overlayHidden = false;
    console.log("Calendar Showing");
    this.calendarModalDisplayEvent.emit(this.overlayHidden);
  }

  SearchInstructor(){
    this.instructorService.loadInstructor(this.auth.getToken(),this.name).subscribe(data=>{
      console.log(data);
      this.searchResultEvent.emit(data.data);
    })
  }

}

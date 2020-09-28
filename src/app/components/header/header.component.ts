import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { InstructorloadService } from 'src/app/services/instructorload.service';
import { AppState } from 'src/app/store/app.states';
import { LoadInstructorListSuccess } from 'src/app/studentstore/actions/student.actions';
import { LoadInstructorListFailure } from 'src/app/studentstore/actions/student.actions';
=======
import { NavController,ModalController } from '@ionic/angular';
// import { CalendarModal,CalendarModalOptions } from 'ion2-calendar';

>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c

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
  public name:string;
  @Output() switchView=new EventEmitter<boolean>();
<<<<<<< HEAD
  @Output() searchResultEvent = new EventEmitter<Array<Object>>();
  @Output() calendarModalDisplayEvent = new EventEmitter<boolean>();
  flag : boolean;
  public name:string;
  overlayHidden:boolean;
=======
  @Output() onActivateCalendar=new EventEmitter<boolean>();
  @Output() sendName=new EventEmitter<string>();
  flag : boolean;
  calendar_is_active:boolean
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
  ngOnInit() {
    this.calendar_is_active = false;
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
    console.log("event fired");
  }

  switchToDayView(){
    this.flag = true; 
    this.switchView.emit(this.flag);
    console.log("event fired");
  }

<<<<<<< HEAD
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

=======
  search(){
    console.log(name);
    this.sendName.emit(name);
  }
//   async openCalendar(){
//     const options: CalendarModalOptions = {
//       pickMode:'single',
//       title: 'BASIC',
//       color:'success'
//     };

//   let myCalendar =  await this.modalCtrl.create({
//     component: CalendarModal,
//     componentProps: { options }
//   });

//   myCalendar.present();
// }
>>>>>>> 4c48c2352ffab196cd42a3aa6952defc6c84529c
}

import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NavController,ModalController } from '@ionic/angular';
// import { CalendarModal,CalendarModalOptions } from 'ion2-calendar';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private navController:NavController) { }
  @Input() showScheduleBar:boolean; 
  @Input() showBackButton: boolean;
  @Input() SearchBarVisible: boolean;
  @Input() title:string;
  @Input() showTitle:boolean;
  @Output() switchView=new EventEmitter<boolean>();
  @Output() onActivateCalendar=new EventEmitter<boolean>();
  flag : boolean;
  calendar_is_active:boolean
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
}

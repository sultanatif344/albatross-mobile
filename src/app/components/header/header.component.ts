import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';


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
  flag : boolean;
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

}

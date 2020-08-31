import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Logout } from 'src/app/store/actions/auth.actions';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(private navController:NavController,private store:Store<AppState>) { }


  role:string;
  ngOnInit() {
    this.role="Instructor";
  }
  goBack(){
    this.navController.back();
  }

  
}

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChangepasswordService } from 'src/app/services/changepassword.service';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  constructor(private navController:NavController, private ChangePasswordService:ChangepasswordService,public store:Store<AppState>,private auth:AuthService) { }


  public currentPassword:string;
  public newPassword:string;
  public title:string;
  ngOnInit() {
    this.title = "Change Password";
  }


  ChangePassword(){
    this.store.select<any>('users').subscribe(data=>{})
      this.ChangePasswordService.UpdatePassword(
      {currentPassword:this.currentPassword,newPassword:this.newPassword},this.auth.getToken())
      .subscribe(data=>{
        return data;
      })
}


  goBack(){
    this.navController.back();
  }
}

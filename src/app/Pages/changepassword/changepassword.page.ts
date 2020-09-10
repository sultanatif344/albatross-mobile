import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChangepasswordService } from 'src/app/services/changepassword.service';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  constructor(private navController:NavController, private ChangePasswordService:ChangepasswordService,public store:Store<AppState>) { }


  public currentPassword:string;
  public newPassword:string;
  ngOnInit() {
  }


  ChangePassword(){
    this.store.select<any>('users').subscribe(data=>{
      this.ChangePasswordService.UpdatePassword(
      {currentPassword:this.currentPassword,newPassword:this.newPassword},data.authState.user.token)
      .subscribe(data=>{
        console.log(data);
      })
  })
}


  goBack(){
    this.navController.back();
  }
}

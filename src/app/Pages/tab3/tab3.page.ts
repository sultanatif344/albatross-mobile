import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Logout } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title:string
  constructor(private router: Router,private navController:NavController,private store:Store<AppState>) {}

ngOnInit(){
  this.title = "Account";
}  
  goBack(){
    this.navController.back();
  }

  goToEditProfile(){
    this.router.navigateByUrl("editprofile");
  }

  goToChangePassword(){
    this.router.navigateByUrl("changepassword");
  }

  logout(){
    this.store.dispatch(new Logout);
  }
  
}

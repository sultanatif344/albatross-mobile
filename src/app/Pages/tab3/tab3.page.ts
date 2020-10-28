import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Logout } from 'src/app/store/actions/auth.actions';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title:string;
  private user:Object;
  public photo_URL:string;
  constructor(private router: Router,private navController:NavController,private store:Store<AppState>,private auth:AuthService) {
    this.photo_URL = this.auth.getUser().photo;
  }

ngOnInit(){
  this.title = "Account";
  this.user = this.auth.getUser();
  this.store.select<any>('users').subscribe(data=>{
    console.log(data);
  })
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
    this.store.dispatch(new Logout());
  }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  title:string
  constructor(private router: Router,private navController:NavController) {}

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
    this.router.navigateByUrl("loginsignup");
  }
  
}

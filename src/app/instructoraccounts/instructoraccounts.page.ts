import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructoraccounts',
  templateUrl: './instructoraccounts.page.html',
  styleUrls: ['./instructoraccounts.page.scss'],
})
export class InstructoraccountsPage implements OnInit {


  title:string;
  constructor(private navController:NavController, private router:Router) { }

  ngOnInit() {
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

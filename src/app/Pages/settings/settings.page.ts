import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router:Router, private navController: NavController) { }

  title:string;
  ngOnInit() {
    this.title = "Settings";
  }


  goBack(){
    this.navController.back();
  }

  logout(){
    this.router.navigateByUrl('loginsignup');
  }

  goToChangePassword(){
    this.router.navigateByUrl('changepassword')
  }
}

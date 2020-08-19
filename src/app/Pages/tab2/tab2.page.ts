import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navController:NavController, private router:Router) {}


  // goBack(){
  //   this.navController.back();
  // }

  goToLessonRequest(){
    this.router.navigateByUrl("lessonrequest");
  }
}

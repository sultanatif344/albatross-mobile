import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lessonrequest',
  templateUrl: './lessonrequest.page.html',
  styleUrls: ['./lessonrequest.page.scss'],
})
export class LessonrequestPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
   goBack(){
      this.navController.back();
   }
}

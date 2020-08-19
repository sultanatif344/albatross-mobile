import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lessondetails',
  templateUrl: './lessondetails.page.html',
  styleUrls: ['./lessondetails.page.scss'],
})
export class LessondetailsPage implements OnInit {

  
  constructor(private router: Router, private navController:NavController) { }

  ngOnInit() {
  }

  goBackToDashboard(){
    this.navController.back();
  }

}

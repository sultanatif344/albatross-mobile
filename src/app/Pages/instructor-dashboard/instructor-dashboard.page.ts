import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.page.html',
  styleUrls: ['./instructor-dashboard.page.scss'],
})
export class InstructorDashboardPage implements OnInit {
  flag: boolean;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  setFlag(event){
    this.flag = event;
    console.log(event);
  }

  unsetFlag(event){
    this.flag = event;
  }

  navigateToLessonDetailPage(){
    this.router.navigateByUrl("lessondetails");
  }
}

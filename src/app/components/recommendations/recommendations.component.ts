import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}


  goToLessonRequest(){
    this.router.navigateByUrl('requestlesson');
  }

}

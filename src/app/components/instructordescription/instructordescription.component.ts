import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructordescription',
  templateUrl: './instructordescription.component.html',
  styleUrls: ['./instructordescription.component.scss'],
})
export class InstructordescriptionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}


  goToLessonRequest(){
    this.router.navigateByUrl('lessonrequest');
  }
}

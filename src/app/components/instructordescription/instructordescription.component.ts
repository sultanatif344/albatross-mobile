import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor';

@Component({
  selector: 'app-instructordescription',
  templateUrl: './instructordescription.component.html',
  styleUrls: ['./instructordescription.component.scss'],
})
export class InstructordescriptionComponent implements OnInit {


  @Input() instructorDescription:any
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.instructorDescription);
  }


  goToLessonRequest(){
    this.router.navigateByUrl('lessonrequest');
  }
}

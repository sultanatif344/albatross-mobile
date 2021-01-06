import { Component, OnInit, Input, Output,EventEmitter, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InstructorloadService } from 'src/app/services/instructorload.service';
import { LoadInstructorListSuccess, LoadInstructorList } from 'src/app/studentstore/actions/student.actions';
import { Observable } from 'rxjs';
// import {  } from 'protractor';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  currentUser: any;
  Instructor: Observable<any>;
  id:string;
  @Input() InstructorDescription:Array<any>;
  @Input() searchResult: Array<any>;
  @Output() emittedId = new EventEmitter<string>()
  constructor(private router:Router, private store:Store,private instructorService:InstructorloadService) { 
  }

  ngOnInit() {
  }



  goToLessonRequest(event){
    this.id = event.id;
    this.router.navigateByUrl(`/requestlesson/${this.id}`);
  }

}

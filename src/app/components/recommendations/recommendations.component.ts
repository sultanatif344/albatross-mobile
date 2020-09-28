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
    console.log(this.InstructorDescription);
  }

  ngOnInit() {
    console.log(this.InstructorDescription);
  //   this.store.dispatch(new LoadInstructorList())
  //   this.store.select<any>(store => store).subscribe(data=>{
  //     // this.instructorService.loadInstructor(data.users.authState.user.token)
  //     console.log(data);
  //     this.currentUser = data.users.authState.user
  //     // this.instructorService.loadInstructor(data.users.authState.user.token);
  //   })
  //   this.instructorService.loadInstructor(this.currentUser.token).subscribe(data=>{
  //     this.store.dispatch(new LoadInstructorListSuccess(data))
  //   });


  //   this.Instructor=this.store.select<any>("Instructors");

  //   this.Instructor.subscribe(data=>{
  //     console.log(data);
  //     this.InstructorDescription=data.list.data
  //     console.log(this.InstructorDescription)
  //   })
  }

  ngOnChanges(){
    // if(this.searchResult.length!=0){
    //   this.InstructorDescription = this.searchResult
    // }
    // this.InstructorDescription = changes.;
    // console.log(changes)
  }


  goToLessonRequest(event){
    this.id = event.id;
    console.log(this.id);    
    this.router.navigateByUrl(`/requestlesson/${this.id}`);
  }

}

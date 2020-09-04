import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InstructorloadService } from 'src/app/services/instructorload.service';
import { LoadInstructorListSuccess, LoadInstructorList } from 'src/app/studentstore/actions/student.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent implements OnInit {
  currentUser: any;
  Instructor: Observable<any>;
  @Input() InstructorDescription: Array<any>;

  constructor(private router:Router, private store:Store,private instructorService:InstructorloadService) { }

  ngOnInit() {
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


  goToLessonRequest(){
    this.router.navigateByUrl('requestlesson');
  }

}

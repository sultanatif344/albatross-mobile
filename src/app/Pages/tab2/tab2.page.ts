import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { LoadInstructorList, LoadInstructorListSuccess, LoadInstructorListFailure } from 'src/app/studentstore/actions/student.actions';
import { InstructorloadService } from 'src/app/services/instructorload.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public currentUser:any;
  public Instructor:Observable<any>;
  public InstructorDescription:Array<any>
  constructor(private navController:NavController, private router:Router,private store:Store<AppState>, private instructorService:InstructorloadService) {}


  // goBack(){
  //   this.navController.back();
  // }


  ngOnInit(){
    this.store.dispatch(new LoadInstructorList())
    this.store.select<any>(store => store).subscribe(data=>{
      // this.instructorService.loadInstructor(data.users.authState.user.token)
      console.log(data);
      this.currentUser = data.users.authState.user
      // this.instructorService.loadInstructor(data.users.authState.user.token);
    })
    this.instructorService.loadInstructor(this.currentUser.token).subscribe(data=>{
      this.store.dispatch(new LoadInstructorListSuccess(data))
      catchError((err)=>{
        this.store.dispatch(new LoadInstructorListFailure(err));
        return of([]);
    })
    });


    this.Instructor=this.store.select<any>("Instructors")

    this.Instructor.subscribe(data=>{
      console.log(data);
      this.InstructorDescription=data.list.data
      console.log(this.InstructorDescription)
    })

    console.log(this.InstructorDescription);
  
  }
  goToLessonRequest(){
    this.router.navigateByUrl("lessonrequest");
  }
}

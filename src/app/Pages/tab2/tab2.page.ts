import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { LoadInstructorList, LoadInstructorListSuccess, LoadInstructorListFailure } from 'src/app/studentstore/actions/student.actions';
import { InstructorloadService } from 'src/app/services/instructorload.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public currentUser:any;
  public Instructor:Observable<any>;
  public InstructorDescription:Array<Object>
  public searchResult:Array<Object>;
  constructor(private navController:NavController, private router:Router,private store:Store<AppState>, private instructorService:InstructorloadService,private auth:AuthService) {
    this.store.dispatch(new LoadInstructorList())
    this.store.select<any>(store => store).subscribe(data=>{
      // this.instructorService.loadInstructor(data.users.authState.user.token)
      console.log(data);
      this.currentUser = this.auth.getUser();
      // this.instructorService.loadInstructor(data.users.authState.user.token);
    })
    this.instructorService.loadInstructor(this.currentUser.token,'').subscribe(data=>{
      this.store.dispatch(new LoadInstructorListSuccess(data))
      catchError(err=>of(new LoadInstructorListFailure(err))
        // return of([]);)
    )})
  }


  // goBack(){
  //   this.navController.back();
  // }


  ngOnInit(){
    


    this.Instructor=this.store.select<any>("Instructors")

    this.Instructor.subscribe(data=>{
      console.log(data);
      this.InstructorDescription=data.list.data
      console.log(this.InstructorDescription)
    })

    // console.log(this.InstructorDescription);
  
  }
  goToLessonRequest(){
    this.router.navigateByUrl("lessonrequest");
  }

  loadSearchResults($event){
    console.log($event)
    this.searchResult= $event;
    this.InstructorDescription = this.searchResult;
    console.log(this.searchResult);
  }
}

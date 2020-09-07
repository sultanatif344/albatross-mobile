import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import { InstructordetailService } from 'src/app/services/instructordetail.service';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { Instructor } from 'src/app/models/instructor';
import { InstructorState } from 'src/app/Instructorstore/Reducer/Instructor.reducer';
@Component({
  selector: 'app-lessonrequest',
  templateUrl: './lessonrequest.page.html',
  styleUrls: ['./lessonrequest.page.scss'],
})
export class LessonrequestPage implements OnInit {

  public instructorDetail:Instructor;
  public selectedInstructor:Instructor;
  constructor(private navController: NavController, private router:ActivatedRoute,
    private instructorDetailsService:InstructordetailService,
    private store:Store<AppState>
    ) { }

    ngOnInit() {
    this.router.params.subscribe(async data=>{
      console.log(data.id);
    this.displaydetails(data.id)
  })
  this.instructorDetail = this.selectedInstructor
  console.log(this.instructorDetail);
  }
   goBack(){
      this.navController.back();
   }

    displaydetails(id){
     this.store.select<any>('users').subscribe(data =>{
     this.instructorDetailsService.getInstructor(data.authState.user.token,id)
     .subscribe( data=>{
       this.selectedInstructor= data.data;
       console.log(this.selectedInstructor);
     })
    })
    
   }

}

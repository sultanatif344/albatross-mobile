import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { BooklessonService } from 'src/app/services/booklesson.service';
import { AppState } from 'src/app/store/app.states';

@Component({
  selector: 'app-lessondetails',
  templateUrl: './lessondetails.page.html',
  styleUrls: ['./lessondetails.page.scss'],
})
export class LessondetailsPage implements OnInit {

  public selectedLessonDetail:any;
  public id:string;
  public callIsActive:boolean;
  public callerId:string;
  public currentUser:User;
  constructor(private router: ActivatedRoute, private navController:NavController, private BookLessonService:BooklessonService, private store:Store<AppState>,private auth:AuthService) { 
  }

  ngOnInit() {
    this.router.params.subscribe(async data=>{
      console.log(data);
      this.callerId = data.id;
      console.log(this.callerId);
    this.displaylessonsdetails(this.callerId)
    })
    
    this.callIsActive = false;
  }

  goBackToDashboard(){
    this.navController.back();
  }


  displaylessonsdetails(id){
    // this.store.select<any>('users').subscribe(data =>{
    //   console.log(data);
    // })
    this.BookLessonService.getlessondetail(id,this.auth.getToken())
    .subscribe( data=>{
      this.selectedLessonDetail= data.data;
      console.log(this.selectedLessonDetail);
    })
  }

  setCallActiveState(event){
    this.callIsActive = event;
  }

}

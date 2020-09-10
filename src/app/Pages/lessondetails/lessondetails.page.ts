import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { BooklessonService } from 'src/app/services/booklesson.service';

@Component({
  selector: 'app-lessondetails',
  templateUrl: './lessondetails.page.html',
  styleUrls: ['./lessondetails.page.scss'],
})
export class LessondetailsPage implements OnInit {

  public selectedLessonDetail:any;
  public id:string;
  constructor(private router: ActivatedRoute, private navController:NavController,private store:Store<AppState>,private BookLessonService:BooklessonService) { }

  ngOnInit() {
    this.router.params.subscribe(async data=>{
      console.log(data);
    this.displaylessonsdetails(data.id)
    })
  }

  goBackToDashboard(){
    this.navController.back();
  }

  displaylessonsdetails(id){
    this.store.select<any>('users').subscribe(data =>{
    this.BookLessonService.getlessondetail(id,data.authState.user.token)
    .subscribe( data=>{
      this.selectedLessonDetail= data.data;
      console.log(this.selectedLessonDetail);
    })
   })
  }

}

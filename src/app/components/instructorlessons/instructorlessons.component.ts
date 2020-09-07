import { Component, OnInit } from '@angular/core';
import { BooklessonService } from 'src/app/services/booklesson.service';
import { AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-instructorlessons',
  templateUrl: './instructorlessons.component.html',
  styleUrls: ['./instructorlessons.component.scss'],
})
export class InstructorlessonsComponent implements OnInit {

  public requestedlessons:Array<object>;
  constructor(private booklessonservice:BooklessonService,private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select<any>('users').subscribe(data =>{
      return this.booklessonservice.getrequestedlesson(data.authState.user.token)
      .subscribe(data=>{
        console.log(data)
      })    
    })
  }


}

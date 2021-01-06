import { Component } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { map, take } from 'rxjs/operators';
import {selectAuthStatusState} from '../../../app/store/app.states';
import { UserState } from 'src/app/store/reducers/auth.reducers';
import { AuthService } from 'src/app/services/auth.service';
import { GetScheduledLessons } from 'src/app/scheduledlessons/actions/scheduledlessons.actions';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public userData: any;
  public roleState$:Observable<string>;
  public state:AppState;
  public currentUser:any;
  public userItem: User; 
  constructor(private store:Store<AppState>, private auth:AuthService) {
  
  }

  ionViewWillEnter(){
    this.currentUser = this.auth.getUser();
  }

  ionViewDidEnter(){
    this.store.dispatch(new GetScheduledLessons())  
  }

  ngOnInit(){
  


    

    

   
    
    


    

    
  }
}

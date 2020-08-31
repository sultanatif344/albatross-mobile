import { Component } from '@angular/core';
import { Store, State, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { map, take } from 'rxjs/operators';
import {selectAuthStatusState} from '../../../app/store/app.states';
import { UserState } from 'src/app/store/reducers/auth.reducers';

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
  constructor(private store:Store<AppState>) {
    // this.roleState$ = this.store.pipe(select('authState','user','role'));
  }


  ngOnInit(){


  this.store.select<any>('users').subscribe(data=>{
      this.currentUser = data.authState.user;
      console.log(this.currentUser);
    });

    

    

    

   
    
    


    // const store = new Store();

    // this.userData.subscribe(data=>console.log(data));

    

    
    // console.log(this.state$.subscribe(data=>{
    //   console.log(data);
    // }));
    

    
  }
}

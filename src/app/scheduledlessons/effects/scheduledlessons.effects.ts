import { Actions, Effect, ofType } from '@ngrx/effects';
import { ScheduledlessonsService } from 'src/app/services/scheduledlessons.service';
import { Injectable } from '@angular/core';
import { GetScheduledLessons, ScheduledLessonActionTypes, GetScheduledLessonsSuccess, GetScheduledLessonsFailure, ScheduledLessonsActions } from '../actions/scheduledlessons.actions';
import { mergeMap, map, catchError, switchMap, take } from 'rxjs/operators';
import { pipe, of, Observable } from 'rxjs';
import { AppState } from '../../store/app.states';
import { Store, select } from '@ngrx/store';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';

@Injectable()

export class ScheduledLessonsEffects{
    token:any = () => {
        let token;
        this.store.select<any>('users').subscribe(data=>{
            console.log(data.authState.user.token)
            token = data.authState.user.token
        })
        return token
    }
    @Effect() getScheduledLessons$ = this.actions$
    .pipe(
      ofType<GetScheduledLessons>(ScheduledLessonActionTypes.GET_LESSONS),
      mergeMap(
        () =>{  
            let test;
            console.log(this.token(),'dsadsadsa')
            test = this.scheduledLessonsService.getLessons(this.token())
            console.log(test)
            return test
        } 
        //   .pipe(
        //      map(data => {
        //       return new GetScheduledLessonsSuccess(data)
        //     }),
        //     catchError(error => of(new GetScheduledLessonsFailure(error)))
        //   )
      )
  )
    // @Effect()
    // pollingStarted$ = () =>
    // this.actions$.pipe(
    //     ofType(ScheduledLessonActionTypes.GET_LESSONS),
    //     mergeMap( action:ScheduledLessons => this.scheduledLessonsService.getLessons() ),
    //     map(data =>  return new GetScheduledLessonsSuccess(data))
    // )

//     @Effect() 
//     loadShopping$ = this.actions$
//     .pipe(
//       ofType<GetScheduledLessons>(ScheduledLessonActionTypes.GET_LESSONS),
//       mergeMap(
//         async () => this.scheduledLessonsService.getLessons(),
//         pipe(   
//             map(data=>{

//             })
//         )
//       ),
//   )
        // mergeMap(
        //    async ()=>this.store.select<any>('users').subscribe(data=>{
        //             this.scheduledLessonsService.getLessons(data.authState.user.token)
        //             .pipe(
        //                 switchMap(payload=>{
        //                     return new GetScheduledLessonsSuccess()
        //                 })
        //             )
        //     })
           
        //     // this.scheduledLessonsService.getLessons()
        // )
    
    
    
    
    // this.store.pipe(
        
    //     select('authState'),
    
    //     switchMap((data)=>{
    //         return this.scheduledLessonsService.getLessons(data.token)
    //         .pipe(
    //             map(lessons=>{
    //                 console.log(lessons);
    //                 return new GetScheduledLessonsSuccess(lessons);
    //             }),
    //             catchError(error=>of(new GetScheduledLessonsSuccess(error)))
    //         )
    //     })
    // )
    
    constructor(private actions$:Actions,
        private scheduledLessonsService:ScheduledlessonsService,private store:Store<AppState>){}
}



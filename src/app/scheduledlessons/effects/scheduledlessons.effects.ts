import { Actions, Effect, ofType } from '@ngrx/effects';
import { ScheduledlessonsService } from 'src/app/services/scheduledlessons.service';
import { Injectable, NgZone } from '@angular/core';
import { GetScheduledLessons, ScheduledLessonActionTypes, GetScheduledLessonsSuccess, GetScheduledLessonsFailure, ScheduledLessonsActions } from '../actions/scheduledlessons.actions';
import { mergeMap, map, catchError, switchMap, take } from 'rxjs/operators';
import { pipe, of, Observable } from 'rxjs';
import { AppState } from '../../store/app.states';
import { Store, select } from '@ngrx/store';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()

export class ScheduledLessonsEffects{
    @Effect() getScheduledLessons$ = this.actions$
    .pipe(
      ofType(ScheduledLessonActionTypes.GET_LESSONS),
      mergeMap(
        () =>{  
            return this.scheduledLessonsService.getLessons(this.auth.getToken())
            .pipe(
                map(data=>{
                    return new GetScheduledLessonsSuccess(data)
                }),
                catchError(error=>of(new GetScheduledLessonsFailure(error)))
            )
        } 
      )
  )
    constructor(private actions$:Actions,
        private scheduledLessonsService:ScheduledlessonsService,private store:Store<AppState>,private auth:AuthService, private zone:NgZone){}
}



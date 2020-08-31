import { Actions, Effect, ofType } from '@ngrx/effects';
import { ScheduledlessonsService } from 'src/app/services/scheduledlessons.service';
import { Injectable } from '@angular/core';
import { GetScheduledLessons, ScheduledLessonActionTypes, GetScheduledLessonsSuccess, GetScheduledLessonsFailure } from '../actions/scheduledlessons.actions';
import { mergeMap, map, catchError, switchMap, take } from 'rxjs/operators';
import { pipe, of } from 'rxjs';
import { AppState } from '../app.states';
import { Store, select } from '@ngrx/store';

@Injectable()

export class ScheduledLessonsEffects{
    @Effect() 
    loadlessons$ =this.store.pipe(
        select('authState'),
        switchMap((data)=>{
            return this.scheduledLessonsService.getLessons(data.token)
            .pipe(
                map(lessons=>{
                    return new GetScheduledLessonsSuccess(lessons);
                }),
                catchError(error=>of(new GetScheduledLessonsSuccess(error)))
            )
        })
    )
    
    constructor(private actions$:Actions,
        private scheduledLessonsService:ScheduledlessonsService,private store:Store<AppState>){}
}



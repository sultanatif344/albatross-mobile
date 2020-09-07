import {Injectable} from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { StudentActions, StudentActionTypes, LoadInstructorListSuccess, LoadInstructorListFailure, LoadInstructorList } from '../actions/student.actions'
import { of, Observable } from 'rxjs';
import { InstructorloadService } from 'src/app/services/instructorload.service';
import { error } from 'protractor';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.states';

@Injectable()

export class StudentEffects{

    constructor(private actions$:Actions,private InstructorloadService:InstructorloadService,private store:Store<AppState>){}

    
    @Effect() instructorload$ = this.actions$.pipe(
        ofType(StudentActionTypes.LOAD_INSTRUCTOR_LIST),
        mergeMap(
            ()=> this.InstructorloadService.loadInstructor(this.token)
            .pipe(  
                map(data=>{
                    console.log(data);
                    return new LoadInstructorListSuccess(data)
                }),
                catchError(error=> of(new LoadInstructorListFailure(error)))
            )
        )
    )


    token:any = () => {
        let token;
        this.store.select<any>('users').subscribe(data=>{
            console.log(data.authState.user.token)
            token = data.authState.user.token
        })
        return token
    }    
}




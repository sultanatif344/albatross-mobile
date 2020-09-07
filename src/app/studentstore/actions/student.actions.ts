import { Action } from '@ngrx/store';
import { Instructor } from 'src/app/models/instructor';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';


export enum StudentActionTypes{
    LOAD_INSTRUCTOR_LIST = '[student] load instructor list',
    LOAD_INSTRUCTOR_LIST_SUCCESS = '[student] load instructor list Success',
    LOAD_INSTRUCTOR_LIST_FAILURE = '[student] load instructor list Failure',
    REQUEST_INSTRUCTOR = '[student] Request Instructor',    
    REQUEST_INSTRUCTOR_SUCCESS = '[student] Request Instructor Success',
    REQUEST_INSTRUCTOR_FAILURE = '[student] Request Instructor Failure'
}



export class LoadInstructorList implements Action{
    readonly type = StudentActionTypes.LOAD_INSTRUCTOR_LIST;
    constructor(){}
}

export class LoadInstructorListSuccess implements Action{
    readonly type = StudentActionTypes.LOAD_INSTRUCTOR_LIST_SUCCESS;
    constructor(public payload:Instructor){

    }
}

export class LoadInstructorListFailure implements Action{
    readonly type = StudentActionTypes.LOAD_INSTRUCTOR_LIST_FAILURE;
    constructor(public payload:Error){

    }
 
}


export class RequestInstructor implements Action{
    readonly type = StudentActionTypes.REQUEST_INSTRUCTOR
    constructor(public payload:ScheduledLessons){}
}


export class RequestInstructorSuccess implements Action{
    readonly type = StudentActionTypes.REQUEST_INSTRUCTOR_SUCCESS
    constructor(public payload:ScheduledLessons){}
}


export class RequestInstructorFailure implements Action{
    readonly type = StudentActionTypes.REQUEST_INSTRUCTOR_FAILURE
    constructor(public payload:Error){}
}

export type StudentActions = 
            LoadInstructorList  
            |LoadInstructorListSuccess
            |LoadInstructorListFailure
            |RequestInstructor
            |RequestInstructorSuccess
            |RequestInstructorFailure;

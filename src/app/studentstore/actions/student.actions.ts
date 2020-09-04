import { Action } from '@ngrx/store';
import { Instructor } from 'src/app/models/instructor';


export enum StudentActionTypes{
    LOAD_INSTRUCTOR_LIST = '[student] load instructor list',
    LOAD_INSTRUCTOR_LIST_SUCCESS = '[student] load instructor list Success',
    LOAD_INSTRUCTOR_LIST_FAILURE = '[student] load instructor list Failure',
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

export type StudentActions = LoadInstructorList|LoadInstructorListSuccess|LoadInstructorListFailure;

import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AuthActionTypes } from '../../store/actions/auth.actions';



export enum ScheduledLessonActionTypes{
    GET_LESSONS = '[Scheduled Lessons] Get Scheduled Lessons',
    GET_LESSONS_SUCCESS = '[Scheduled Lessons] Get Scheduled Lessons Success',
    GET_LESSONS_FAILURE = '[Scheduled Lessons] Get Scheduled Lessons Failure'
}


export class GetScheduledLessons implements Action{
    readonly type = ScheduledLessonActionTypes.GET_LESSONS;

    constructor(){}
}

export class GetScheduledLessonsSuccess implements Action{
    readonly type = ScheduledLessonActionTypes.GET_LESSONS_SUCCESS;

    constructor(public payload:any){}
}


export class GetScheduledLessonsFailure implements Action{
    readonly type = ScheduledLessonActionTypes.GET_LESSONS_FAILURE;

    constructor(public payload:any){}
}


export type ScheduledLessonsActions = GetScheduledLessons|GetScheduledLessonsSuccess|GetScheduledLessonsFailure;
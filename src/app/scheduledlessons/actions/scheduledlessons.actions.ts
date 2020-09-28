import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AuthActionTypes } from '../../store/actions/auth.actions';



export enum ScheduledLessonActionTypes{
    GET_LESSONS = '[Scheduled Lessons] Get Scheduled Lessons',
    GET_LESSONS_SUCCESS = '[Scheduled Lessons] Get Scheduled Lessons Success',
    GET_LESSONS_FAILURE = '[Scheduled Lessons] Get Scheduled Lessons Failure',
    REQUEST_LESSON = '[Scheduled Lessons] Request Lesson',
    REQUEST_LESSON_SUCCESS = '[Scheduled Lessons] Request Lesson',
    REQUEST_LESSON_FAILURE = '[Scheduled Lessons] Request Lesson'
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

    constructor(public payload:Error){}
}

export class RequestLesson implements Action{
    readonly type = ScheduledLessonActionTypes.REQUEST_LESSON;
    constructor(public payload:any){}
}

export class RequestLessonSuccess implements Action{
    readonly type = ScheduledLessonActionTypes.REQUEST_LESSON_SUCCESS;
    constructor(public payload:any){}
}

export class RequestLessonFailure implements Action{
    readonly type = ScheduledLessonActionTypes.REQUEST_LESSON_FAILURE;
    constructor(public payload:Error){}
}

export type ScheduledLessonsActions = GetScheduledLessons|GetScheduledLessonsSuccess|GetScheduledLessonsFailure;
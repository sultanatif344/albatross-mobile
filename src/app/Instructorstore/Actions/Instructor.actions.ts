import { Instructor } from 'src/app/models/instructor';



export enum InstructorActionTypes {
     EDIT_INSTRUCTOR_PROFILE = '[Instructor] Edit Instructor',
     EDIT_INSTRUCTOR_PROFILE_SUCCESS = '[Instructor] Edit Instructor Success',
     EDIT_INSTRUCTOR_PROFILE_FAILURE = '[Instructor] Edit Instructor Failure',
     GET_LESSON_REQUESTS_SUCCESS = '[Instructor] Get lesson request success',
     GET_LESSON_REQUESTS_FAILURE = '[Instructor] Get lesson request failure'
}


export class EditInstructorProfileAction{
    readonly type = InstructorActionTypes.EDIT_INSTRUCTOR_PROFILE
    constructor(public payload:Instructor){}
}

export class EditInstructorProfileSuccessAction{
    readonly type = InstructorActionTypes.EDIT_INSTRUCTOR_PROFILE_SUCCESS
    constructor(public payload:Instructor){}
}

export class EditInstructorProfileFailureAction{
    readonly type = InstructorActionTypes.EDIT_INSTRUCTOR_PROFILE_FAILURE
    constructor(public payload:Error){}
}

export class GetLessonsRequestSuccess{
    readonly type = InstructorActionTypes.GET_LESSON_REQUESTS_SUCCESS
    constructor(public payload:Array<Object>){}
}

export class GetLessonsRequestFailure{
    readonly type = InstructorActionTypes.GET_LESSON_REQUESTS_FAILURE
    constructor(public payload:Error){}
}


// https://albatross-v1.herokuapp.com/api/v1/lesson/getlessonrequest


export type InstructorActions = EditInstructorProfileAction
|EditInstructorProfileSuccessAction
|EditInstructorProfileFailureAction
|GetLessonsRequestSuccess
|GetLessonsRequestFailure

// export class UpdateInstructorAction{
//     readonly type = 
// }
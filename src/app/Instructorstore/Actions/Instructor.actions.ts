import { Instructor } from 'src/app/models/instructor';



export enum InstructorActionTypes {
     EDIT_INSTRUCTOR_PROFILE = '[Instructor] Edit Instructor',
     EDIT_INSTRUCTOR_PROFILE_SUCCESS = '[Instructor] Edit Instructor Success',
     EDIT_INSTRUCTOR_PROFILE_FAILURE = '[Instructor] Edit Instructor Failure',
     GET_LESSON_REQUESTS_SUCCESS = '[Instructor] Get lesson request success',
     GET_LESSON_REQUESTS_FAILURE = '[Instructor] Get lesson request failure',
     CHANGE_PASSWORD_SUCCESS = '[Instructor] Change Password success',
     CHANGE_PASSWORD_FAILURE = '[Instructor] Change Password failure',
     ACCEPT_REQUEST_SUCCESS = '[Instructor] Accept Request success',
     ACCEPT_REQUEST_FAILURE = '[Instructor] Accept Request failure',
     DECLINE_REQUEST_SUCCESS = '[Instructor] Decline Request success',
     DECLINE_REQUEST_FAILURE = '[Instructor] Decline Request failure'
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

export class ChangePasswordSuccess{
    readonly type = InstructorActionTypes.CHANGE_PASSWORD_SUCCESS
    constructor(public payload:Object){}
}

export class ChangePasswordFailure{
    readonly type = InstructorActionTypes.CHANGE_PASSWORD_FAILURE
    constructor(public payload:Error){}
}

export class AcceptRequestSuccess{
    readonly type = InstructorActionTypes.ACCEPT_REQUEST_SUCCESS
    constructor(public payload:Object){}
}

export class AcceptRequestFailure{
    readonly type = InstructorActionTypes.ACCEPT_REQUEST_SUCCESS
    constructor(public payload:Error){}
}

export class DeclineRequestSuccess{
    readonly type = InstructorActionTypes.DECLINE_REQUEST_SUCCESS
    constructor(public payload:Object){}
}

export class DeclineRequestFailure{
    readonly type = InstructorActionTypes.DECLINE_REQUEST_FAILURE
    constructor(public payload:Error){}
}


// https://albatross-v1.herokuapp.com/api/v1/lesson/getlessonrequest


export type InstructorActions = EditInstructorProfileAction
|EditInstructorProfileSuccessAction
|EditInstructorProfileFailureAction
|GetLessonsRequestSuccess
|GetLessonsRequestFailure
|AcceptRequestSuccess
|AcceptRequestFailure
|DeclineRequestSuccess
|DeclineRequestFailure

// export class UpdateInstructorAction{
//     readonly type = 
// }


// https://albatross-v1.herokuapp.com/api/v1/lesson/getlessonrequest



import { Instructor } from 'src/app/models/instructor';



export enum InstructorActionTypes {
     EDIT_INSTRUCTOR_PROFILE = '[Instructor] Edit Instructor',
     EDIT_INSTRUCTOR_PROFILE_SUCCESS = '[Instructor] Edit Instructor Success',
     EDIT_INSTRUCTOR_PROFILE_FAILURE = '[Instructor] Edit Instructor Failure'
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


export type InstructorActions = EditInstructorProfileAction
|EditInstructorProfileSuccessAction
|EditInstructorProfileFailureAction

// export class UpdateInstructorAction{
//     readonly type = 
// }
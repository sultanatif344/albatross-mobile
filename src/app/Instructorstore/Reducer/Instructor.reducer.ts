import { Instructor } from 'src/app/models/instructor';
import { InstructorActions, InstructorActionTypes } from '../Actions/Instructor.actions';



export interface InstructorState{
    obj: Instructor
    loading:boolean
    error:Error
}

export interface RequestState{
    list: Array<Object>
    error:Error
}


export interface RequestStatusState{
    obj:Object,
    error:Error
}
// export interface PasswordState{
//     obj:Object,
//     error:Error
// }

export const InitialState: InstructorState = {
    obj:{
        // photo:'no-photo.jpg',
        name:null,
        dexterity:null,
        timeZone:null,
        language:[],
        typeOfLessonsOffered:[],
        description:null,
        courseAffiliation:null,
        rate:null,
        availableTimeSlots: [],
    },
    loading:false,
    error: undefined
}


export const RequestInitialState = {
    list:[{}],
    error:undefined
}

export const RequestStatusInitialState = {
    obj:{},
    error:undefined
}

// export const PasswordInitialState = {
//     obj:{
//         currentPassword:,
//         newPassword:
//     }
// }

export function InstructorReducer(state:InstructorState = InitialState,actions:InstructorActions,requestrecievestate:RequestState = RequestInitialState,requeststatus:RequestStatusState){

    switch(actions.type){
        case InstructorActionTypes.EDIT_INSTRUCTOR_PROFILE:{
            return{
                ...state,
                obj:actions.payload,
                loading:true,
                error: false
            }
        }
        case InstructorActionTypes.EDIT_INSTRUCTOR_PROFILE_SUCCESS:{
            return{
                ...state,
                obj:actions.payload,
                loading:false,
                error:false
            }
        }

        case InstructorActionTypes.EDIT_INSTRUCTOR_PROFILE_FAILURE:{
            return{
                ...state,
                error:actions.payload,
                loading:false
            }
        }
        case InstructorActionTypes.GET_LESSON_REQUESTS_SUCCESS:{
            return{
                ...requestrecievestate,
                list:actions.payload
            }
        }
        case InstructorActionTypes.GET_LESSON_REQUESTS_FAILURE:{
            return{
                ...requestrecievestate,
                error:actions.payload
            }
        }
        case InstructorActionTypes.ACCEPT_REQUEST_SUCCESS:{
            return{
                ...requeststatus,
                obj:actions.payload
            }
        }
        // case InstructorActionTypes.ACCEPT_REQUEST_FAILURE:{
        //     return{
        //         ...requeststatus,
        //         error:actions.
        //     }
        // }
    }



}
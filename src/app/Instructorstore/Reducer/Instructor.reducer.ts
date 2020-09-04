import { Instructor } from 'src/app/models/instructor';
import { InstructorActions, InstructorActionTypes } from '../Actions/Instructor.actions';



export interface InstructorState{
    obj: Instructor
    loading:boolean
    error:Error
}

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


export function InstructorReducer(state:InstructorState = InitialState,actions:InstructorActions){

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
    }



}
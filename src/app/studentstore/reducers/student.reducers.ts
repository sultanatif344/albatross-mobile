import { Instructor } from 'src/app/models/instructor';
// import { InitialState } from '@ngrx/store/src/models';
import { StudentActions, StudentActionTypes } from '../actions/student.actions';


export interface StudentState{
    list: Instructor[],
    loading:boolean,
    error:Error
}

export const InitialState: StudentState = {
    list:[],
    loading:false,
    error: undefined
}


export function studentreducer(state:StudentState = InitialState, actions:StudentActions ){

    switch(actions.type){
        case StudentActionTypes.LOAD_INSTRUCTOR_LIST:{
            console.log("Instructor list action");
            return{
                ...state,
                loading:true
            }
            
        }
        case StudentActionTypes.LOAD_INSTRUCTOR_LIST_SUCCESS:{
            return{
                ...state,
                list:actions.payload,
                loading: false
            }
        }
        case StudentActionTypes.LOAD_INSTRUCTOR_LIST_FAILURE:{
            return{
                ...state,
                error:actions.payload,
                loading:false
            }
        }
        default:{
            return state
        }
    }
}
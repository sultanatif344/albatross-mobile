import { Instructor } from 'src/app/models/instructor';
// import { InitialState } from '@ngrx/store/src/models';
import { StudentActions, StudentActionTypes } from '../actions/student.actions';
import { ScheduledLessons } from 'src/app/models/scheduledlessons';
import { ScheduledlessonsService } from 'src/app/services/scheduledlessons.service';


export interface StudentState{
    list: Instructor[],
    loading:boolean,
    error:Error
}

export interface RequestState{
    obj:ScheduledLessons
    error:Error
}

export const InitialState: StudentState = {
    list:[],
    loading:false,
    error: undefined
}

export const RequestInitialState: RequestState = {
    obj:{},
    error:undefined
}


export function studentreducer(state:StudentState = InitialState, 
    actions:StudentActions, 
    requeststate:RequestState = RequestInitialState, 
    ){

    switch(actions.type){
        case StudentActionTypes.LOAD_INSTRUCTOR_LIST:{
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
        case StudentActionTypes.REQUEST_INSTRUCTOR:{
            return{
                ...requeststate,
                obj:actions.payload,
            }
        }
        case StudentActionTypes.REQUEST_INSTRUCTOR_SUCCESS:{
            return{
                ...requeststate,
                obj:actions.payload
            }
        }
        case StudentActionTypes.REQUEST_INSTRUCTOR_FAILURE:{
            return{
                ...requeststate,
                error:actions.payload
            }
        }
        default:{
            return state
        }
    }
}
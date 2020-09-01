import { ScheduledLessons } from 'src/app/models/scheduledlessons';
// import { InitialState } from '@ngrx/store/src/models';
import { ScheduledLessonsActions, ScheduledLessonActionTypes } from '../actions/scheduledlessons.actions';
import { initialState } from '../../store/reducers/auth.reducers';

export interface scheduledlessonsState{
    list: ScheduledLessons[],
    loading:boolean,
    error:Error
}

export const InitialState: scheduledlessonsState = {
    list:[],
    loading:false,
    error: undefined
}


export function scheduledLessonsReducer(state:scheduledlessonsState = InitialState,actions:ScheduledLessonsActions){


    switch(actions.type){
        case ScheduledLessonActionTypes.GET_LESSONS:{
            return{
                ...state,
                loading:true
            }
        }
        case ScheduledLessonActionTypes.GET_LESSONS_SUCCESS:{
            return{
                ...state,
                list:actions.payload,
                loading: false
            }
        }
        case ScheduledLessonActionTypes.GET_LESSONS_FAILURE:{
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
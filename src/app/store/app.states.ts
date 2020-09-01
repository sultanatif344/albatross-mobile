import { ActionReducerMap } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { scheduledlessonsState } from '../scheduledlessons/reducers/scheduledlessons.reducer';
import * as schedule from '../../app/scheduledlessons/reducers/scheduledlessons.reducer';

export interface AppState{
    authState: auth.UserState;
    // scheduledlessonsState:scheduledlessonsState;
}

export const reducers:ActionReducerMap<AppState> = {
    authState: auth.AuthReducer,
    // scheduledlessonsState:schedule.scheduledLessonsReducer
}

export const selectAuthState = createFeatureSelector<AppState>('Auth');

export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state:AppState)=>state.authState
)



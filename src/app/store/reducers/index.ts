import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth.reducers';
import * as fromLessons from '../../scheduledlessons/reducers/scheduledlessons.reducer';

export interface AppState {
    users: fromAuth.UserState;
    // lessons:fromLessons.scheduledlessonsState;
}

export const reducers: ActionReducerMap<AppState> = {
    users: fromAuth.AuthReducer,
    // lessons:fromLessons.scheduledLessonsReducer
};
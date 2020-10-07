import { User } from 'src/app/models/user';
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.states';

export interface UserState{
    isAuthenticated:boolean;
    user?: User;
    token:string;
    errorMessage?:string;
}

export const initialState:UserState = {
    isAuthenticated:false,
    user:null,
    token:null,
    errorMessage:null
}




export function AuthReducer(state:UserState = initialState,action:AuthActions){
    
    switch(action.type){
        case AuthActionTypes.LOGIN:{
            
            
            return{
                ...state,
                isAuthenticated:false,
                errorMessage: null
            }

        }
        case AuthActionTypes.LOGIN_SUCCESS:{
            return{
            ...state,
            isAuthenticated:true,
            user:{
                token:action.payload.token,
                email: action.payload.email,
                role:action.payload.role,
                name:action.payload.name,
                id:action.payload._id
            },
            errorMessage:null
        }

        }
        case AuthActionTypes.LOGIN_FAILURE:{
            return{
                ...state,
                errorMessage: action.payload.error.error,
            }
        }

        case AuthActionTypes.LOGOUT:{
            return initialState;
        }

        case AuthActionTypes.SIGNUP:{
            return{
                ...state,
                user:{
                    email:action.payload.email,
                    role:action.payload.role,
                    password:action.payload.password,
                    name:action.payload.name
                
                }
            }
        }
        case AuthActionTypes.SIGNUP_SUCCESS:{
            return{
            ...state,
            isAuthenticated:true,
            user:{
                token:action.payload.token,
                email: action.payload.email,
                role:action.payload.role,
                name:action.payload.name,
                id:action.payload._id
            },
            errorMessage:null
        }
        }

        case AuthActionTypes.SIGNUP_FAILURE:{
            return{
                ...state,
                isAuthenticated:false,
                errorMessage:action.payload.error.error,
            }
        }
        default:{
            return state;
        }
    }
    
}












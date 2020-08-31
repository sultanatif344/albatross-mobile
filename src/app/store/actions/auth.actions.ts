import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { error } from 'protractor';

export enum AuthActionTypes{
    LOGIN = '[Auth] Login',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGIN_FAILURE = '[Auth] Login Failure',
    LOGOUT = '[Auth] Logout',
    SIGNUP = '[Auth] Sign up',
    SIGNUP_SUCCESS = '[Auth] Sign up success',
    SIGNUP_FAILURE = '[Auth] Sign up failure'
}


export class LogIn implements Action{
    readonly type = AuthActionTypes.LOGIN;
    constructor(public payload:any){

    }
}

export class LogInSuccess implements Action{
    readonly type = AuthActionTypes.LOGIN_SUCCESS;
    constructor(public payload:any){

    }
}

export class LogInFailure implements Action{
    readonly type = AuthActionTypes.LOGIN_FAILURE;
    constructor(public payload:Error){

    }
}


export class Logout implements Action{
    readonly type = AuthActionTypes.LOGOUT;
}

export class SignUp implements Action{
    readonly type = AuthActionTypes.SIGNUP;
    constructor(public payload:any){}
}

export class SignUpSuccess implements Action{
    readonly type = AuthActionTypes.SIGNUP_SUCCESS;
    constructor(public payload:any){}
}

export class SignUpFailure implements Action{
    readonly type = AuthActionTypes.SIGNUP_FAILURE;
    constructor(public payload:any){}
}



export type AuthActions = LogIn | LogInSuccess| LogInFailure|Logout|SignUp|SignUpSuccess|SignUpFailure;


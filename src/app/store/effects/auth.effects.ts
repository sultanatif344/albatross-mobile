import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { AuthActionTypes, LogIn, LogInSuccess, LogInFailure, SignUp, SignUpSuccess, SignUpFailure } from '../actions/auth.actions';
import { tap, map, switchMap, catchError, retry, retryWhen } from 'rxjs/operators';
import { Injectable, NgZone } from '@angular/core';
import { userInfo } from 'os';
import { Action, Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
// import 'rxjs/operator/catch';

@Injectable()
export class AuthEffects{
    

@Effect()
LogIn:Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
    map((action:LogIn)=>action.payload),
    switchMap(payload=>{
        console.log(payload)
        return this.authService.logIn(payload.email,payload.password).pipe(
        map((user:any)=>{
            console.log(user);
            return new LogInSuccess({token: user.token,email:user.user.email, role:user.user.role})
        }),
        catchError(err=>{
            console.log(err)
            return of(new LogInFailure(err))
        })
        )
    })   
)

    


@Effect({dispatch:false})
LoginSuccess:Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user)=>{
        this.zone.run(()=>{
        localStorage.setItem('token',user.payload.token);
        localStorage.setItem('user',JSON.stringify(user.payload));
        this.router.navigateByUrl('');
    })
    }),
    
)

@Effect({dispatch:false})
LoginFailure:Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
);

@Effect({dispatch:false})
Logout:Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(()=>{
        this.zone.run(()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.router.navigateByUrl('loginsignup')
    })
    })
);


@Effect()
SignUp:Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP),
    map((action:SignUp)=>action.payload),
    switchMap(payload=>{
        return this.authService.signUp(payload.name,payload.mobilenumber,payload.email,payload.password,payload.role).pipe(
            map(
                ((user:any)=>{
                    console.log(user);
                    return new SignUpSuccess({token:user.token,email:user.user.email,role:user.user.role});
                })
            ),
            catchError(err=>{
                return of(new SignUpFailure(err));
            })
        )
    })
);

@Effect({dispatch:false})
SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user)=>{
        console.log(user);
        localStorage.setItem('token',user.payload.token);
        localStorage.setItem('user',JSON.stringify(user.payload));
        this.router.navigateByUrl('');
    })
)




// @Effect()
// SignUp: Observable<any> = this.actions
//   .ofType(AuthActionTypes.SIGNUP)
//   .map((action: SignUp) => action.payload)
//   .switchMap(payload => {
//     return this.authService.signUp(payload.email, payload.password,payload.email,payload.password,payload.role),
//       map((user) => {
//         console.log(user);
//         return new SignUpSuccess({token: user.token, email: payload.email});
//       })
//       .catch((error) => {
//         console.log(error);
//         return Observable.of(new SignUpFailure({ error: error }));
//       });
//   });


// @Effect()
// SignUp: Observable<any> = this.actions.pipe(
//     ofType(AuthActionTypes.SIGNUP),
//     map((action:SignUp)=>action.payload),
//     switchMap(payload=>{
//         return this.authService.signUp(payload.email,payload.number,payload.email,payload.password,payload.role)
//     }),
//     map(user=>{
//         console.log(user);
//         return new SignUpSuccess({token:user.token,email:user.email})
//     })
// )




constructor(private actions:Actions,
    private authService:AuthService,
    private router:Router,
    private store:Store,
    private zone:NgZone
    ){

}
}
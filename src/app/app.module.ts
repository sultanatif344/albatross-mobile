import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayviewComponent } from './components/dayview/dayview.component';
import { AuthService } from './services/auth.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store/reducers/auth.reducers';
import { AuthGuardService as authGuard} from './services/auth-guard.service'; 
import { reducers } from './store/reducers';
import { ScheduledLessonsEffects } from './scheduledlessons/effects/scheduledlessons.effects';
import { ScheduledlessonsService } from './services/scheduledlessons.service';
import { InstructorloadService } from './services/instructorload.service';
import { StudentEffects } from './studentstore/effects/student.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherFieldsModule } from './components/teacherfields/teacherfields.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/src/instrument';
import { environment } from 'src/environments/environment';
import {TokenInterceptorService} from '../app/services/token-interceptor.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    // DayviewComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    TeacherFieldsModule,
    EffectsModule.forRoot([StudentEffects]),   
    StoreModule.forRoot(reducers),
    NgbModule,
    AngularFireStorageModule
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production, // Restrict extension to log-only mode
    // })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ScheduledlessonsService,
    InstructorloadService,
    FormsModule,
    ReactiveFormsModule,
    authGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

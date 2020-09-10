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

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    // DayviewComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    TeacherFieldsModule,
    EffectsModule.forRoot([StudentEffects]),   
    StoreModule.forRoot(reducers)
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

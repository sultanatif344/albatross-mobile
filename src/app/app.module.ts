import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthGuardService as authGuard} from './services/auth-guard.service'; 
import { reducers } from './store/reducers';
import { ScheduledlessonsService } from './services/scheduledlessons.service';
import { InstructorloadService } from './services/instructorload.service';
import { FormsModule} from '@angular/forms';
import { TeacherFieldsModule } from './components/teacherfields/teacherfields.module';
import {NgbModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthEffects } from './store/effects/auth.effects';
@NgModule({
  declarations: [AppComponent,
  ],
  entryComponents: [
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    TeacherFieldsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    NgbModule,
    FormsModule,
    AngularFireStorageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    ScheduledlessonsService,
    InstructorloadService,
    authGuard,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

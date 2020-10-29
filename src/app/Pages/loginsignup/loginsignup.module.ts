import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginsignupPageRoutingModule } from './loginsignup-routing.module';

import { LoginsignupPage } from './loginsignup.page';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/store/effects/auth.effects';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
import { LoaderComponent } from 'src/app/components/loader/loader.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginsignupPageRoutingModule,
    SharedModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginsignupPage,LoginComponent,SignupComponent],
})
export class LoginsignupPageModule {}

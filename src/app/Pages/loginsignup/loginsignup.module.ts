import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginsignupPageRoutingModule } from './loginsignup-routing.module';

import { LoginsignupPage } from './loginsignup.page';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/store/effects/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginsignupPageRoutingModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginsignupPage]
})
export class LoginsignupPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificationPageRoutingModule } from './verification-routing.module';

import { VerificationPage } from './verification.page';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
import { VerificationComponent } from 'src/app/components/verification/verification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationPageRoutingModule,
    SharedModule
  ],
  declarations: [VerificationPage]
})
export class VerificationPageModule {}

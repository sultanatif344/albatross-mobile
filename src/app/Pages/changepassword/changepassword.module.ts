import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangepasswordPageRoutingModule } from './changepassword-routing.module';

import { ChangepasswordPage } from './changepassword.page';
import { ChangepasswordComponent } from 'src/app/components/changepassword/changepassword.component';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ChangepasswordPageRoutingModule
  ],
  declarations: [ChangepasswordPage]
})
export class ChangepasswordPageModule {}

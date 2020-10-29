import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructorlessonrequestPageRoutingModule } from './instructorlessonrequest-routing.module';

import { InstructorlessonrequestPage } from './instructorlessonrequest.page';
import { HeaderComponent } from '../components/header/header.component';
import { InstructorlessonsComponent } from '../components/instructorlessons/instructorlessons.component';
import { SharedModule } from '../sharedmodules/sharedmodules.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructorlessonrequestPageRoutingModule,
    SharedModule
  ],
  declarations: [InstructorlessonrequestPage],
})
export class InstructorlessonrequestPageModule {}

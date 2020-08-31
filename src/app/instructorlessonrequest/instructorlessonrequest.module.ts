import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructorlessonrequestPageRoutingModule } from './instructorlessonrequest-routing.module';

import { InstructorlessonrequestPage } from './instructorlessonrequest.page';
import { HeaderComponent } from '../components/header/header.component';
import { InstructorlessonsComponent } from '../components/instructorlessons/instructorlessons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructorlessonrequestPageRoutingModule
  ],
  declarations: [InstructorlessonrequestPage,HeaderComponent,InstructorlessonsComponent]
})
export class InstructorlessonrequestPageModule {}

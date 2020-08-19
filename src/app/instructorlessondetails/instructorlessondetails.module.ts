import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructorlessondetailsPageRoutingModule } from './instructorlessondetails-routing.module';

import { InstructorlessondetailsPage } from './instructorlessondetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructorlessondetailsPageRoutingModule
  ],
  declarations: [InstructorlessondetailsPage]
})
export class InstructorlessondetailsPageModule {}

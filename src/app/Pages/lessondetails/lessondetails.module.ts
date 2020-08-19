import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessondetailsPageRoutingModule } from './lessondetails-routing.module';

import { LessondetailsPage } from './lessondetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessondetailsPageRoutingModule
  ],
  declarations: [LessondetailsPage]
})
export class LessondetailsPageModule {}

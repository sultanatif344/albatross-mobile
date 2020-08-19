import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonrequestPageRoutingModule } from './lessonrequest-routing.module';

import { LessonrequestPage } from './lessonrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonrequestPageRoutingModule
  ],
  declarations: [LessonrequestPage]
})
export class LessonrequestPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonrequestPageRoutingModule } from './lessonrequest-routing.module';

import { LessonrequestPage } from './lessonrequest.page';
import { InstructordescriptionComponent } from 'src/app/components/instructordescription/instructordescription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonrequestPageRoutingModule
  ],
  declarations: [LessonrequestPage, InstructordescriptionComponent]
})
export class LessonrequestPageModule {}

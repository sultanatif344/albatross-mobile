import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonrequestPageRoutingModule } from './lessonrequest-routing.module';

import { LessonrequestPage } from './lessonrequest.page';
import { InstructordescriptionComponent } from 'src/app/components/instructordescription/instructordescription.component';
import {TimepickerComponent} from '../../components/timepicker/timepicker.component'
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonrequestPageRoutingModule,
    NgbModule,
    SharedModule
  ],
  declarations: [LessonrequestPage, TimepickerComponent]
})
export class LessonrequestPageModule {}

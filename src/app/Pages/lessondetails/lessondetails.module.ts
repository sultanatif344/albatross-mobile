import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessondetailsPageRoutingModule } from './lessondetails-routing.module';

import { LessondetailsPage } from './lessondetails.page';
import { DetailsOflessonsComponent } from 'src/app/components/details-oflessons/details-oflessons.component';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
import { VideocallComponent } from 'src/app/components/videocall/videocall.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessondetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [LessondetailsPage,VideocallComponent]
})
export class LessondetailsPageModule {}

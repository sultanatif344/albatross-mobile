import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessondetailsPageRoutingModule } from './lessondetails-routing.module';

import { LessondetailsPage } from './lessondetails.page';
import { DetailsOflessonsComponent } from 'src/app/components/details-oflessons/details-oflessons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessondetailsPageRoutingModule
  ],
  declarations: [LessondetailsPage,DetailsOflessonsComponent]
})
export class LessondetailsPageModule {}

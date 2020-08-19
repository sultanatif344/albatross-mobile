import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordedlecturesPageRoutingModule } from './recordedlectures-routing.module';

import { RecordedlecturesPage } from './recordedlectures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordedlecturesPageRoutingModule
  ],
  declarations: [RecordedlecturesPage]
})
export class RecordedlecturesPageModule {}

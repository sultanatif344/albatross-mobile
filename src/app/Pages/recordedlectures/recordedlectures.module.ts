import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordedlecturesPageRoutingModule } from './recordedlectures-routing.module';

import { RecordedlecturesPage } from './recordedlectures.page';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
import { RecordedvideosComponent } from 'src/app/components/recordedvideos/recordedvideos.component';
import { CommentsComponent } from 'src/app/components/comments/comments.component';
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordedlecturesPageRoutingModule,
    FileSaverModule,
    SharedModule,
  ],
  declarations: [RecordedlecturesPage,RecordedvideosComponent,CommentsComponent]
})
export class RecordedlecturesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofilePageRoutingModule } from './editprofile-routing.module';

import { EditprofilePage } from './editprofile.page';
import { StudentfieldsComponent } from 'src/app/components/studentfields/studentfields.component';
import { TeacherfieldsComponent } from 'src/app/components/teacherfields/teacherfields.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofilePageRoutingModule
  ],
  declarations: [EditprofilePage,StudentfieldsComponent,TeacherfieldsComponent]
})
export class EditprofilePageModule {}

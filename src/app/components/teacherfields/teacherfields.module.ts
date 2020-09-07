import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { EditprofilePageRoutingModule } from './editprofile-routing.module';

// import { EditprofilePage } from './editprofile.page';
import { StudentfieldsComponent } from 'src/app/components/studentfields/studentfields.component';
import { TeacherfieldsComponent } from 'src/app/components/teacherfields/teacherfields.component';
import { SharedModule } from 'src/app/sharedmodules/sharedmodules.module';
import { StoreModule } from '@ngrx/store';
import { InstructorReducer } from 'src/app/Instructorstore/Reducer/Instructor.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    StoreModule.forFeature('instructor',InstructorReducer),
  ],
  declarations: []
})
export class TeacherFieldsModule {}
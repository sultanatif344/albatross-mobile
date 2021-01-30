import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { StudentfieldsComponent } from '../components/studentfields/studentfields.component';
import { TeacherfieldsComponent } from '../components/teacherfields/teacherfields.component';
import { DetailsOflessonsComponent } from '../components/details-oflessons/details-oflessons.component';
import { InstructordescriptionComponent } from '../components/instructordescription/instructordescription.component';
import {NgbModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ChangepasswordComponent } from '../components/changepassword/changepassword.component';
import { LoaderComponent } from '../components/loader/loader.component';
import {IonicModule} from '@ionic/angular';
import { TimepickerComponent } from '../components/timepicker/timepicker.component';
import { VerificationComponent } from '../components/verification/verification.component';
import { VideocallComponent } from '../components/videocall/videocall.component';
import { ReviewpopupComponent } from '../components/reviewpopup/reviewpopup.component';
import { WeeklessonsbarComponent } from '../components/weeklessonsbar/weeklessonsbar.component';
import { DayviewComponent } from '../components/dayview/dayview.component';
import { WeekviewComponent } from '../components/weekview/weekview.component';
import { LessonsBarComponent } from '../components/lessons-bar/lessons-bar.component';
import { InstructorlessonsComponent } from '../components/instructorlessons/instructorlessons.component';

@NgModule({
 imports:      [ CommonModule,
    IonicModule,
    FormsModule,
    NgbTimepickerModule
],
 declarations: [
    HeaderComponent, 
    StudentfieldsComponent,
    TeacherfieldsComponent,
    DetailsOflessonsComponent,
    InstructordescriptionComponent,
    ChangepasswordComponent,
    LoaderComponent,
    TimepickerComponent,
    VerificationComponent,
    VideocallComponent,
    ReviewpopupComponent,
    WeeklessonsbarComponent,
    LessonsBarComponent,
    DayviewComponent,
    WeekviewComponent,
    InstructorlessonsComponent,
],

 exports:[ 
     HeaderComponent, 
    CommonModule, 
    FormsModule,
    StudentfieldsComponent,
    TeacherfieldsComponent,
    DetailsOflessonsComponent,
    InstructordescriptionComponent,
    ChangepasswordComponent,
    LoaderComponent,
    TimepickerComponent,
    VerificationComponent,
    VideocallComponent,
    ReviewpopupComponent,
    WeeklessonsbarComponent,
    LessonsBarComponent,
    DayviewComponent,
    WeekviewComponent,
    InstructorlessonsComponent
 ]
})
export class SharedModule { }
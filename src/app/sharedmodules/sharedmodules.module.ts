import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { StudentfieldsComponent } from '../components/studentfields/studentfields.component';
import { TeacherfieldsComponent } from '../components/teacherfields/teacherfields.component';
import { DetailsOflessonsComponent } from '../components/details-oflessons/details-oflessons.component';
import { InstructordescriptionComponent } from '../components/instructordescription/instructordescription.component';
// import { CustomerComponent } from './customer.component';
// import { NewItemDirective } from './new-item.directive';
// import { OrdersPipe } from './orders.pipe';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [
     HeaderComponent,
    StudentfieldsComponent,
    TeacherfieldsComponent,
    DetailsOflessonsComponent,
    InstructordescriptionComponent
],

 exports:[ 
     HeaderComponent, 
    CommonModule, 
    FormsModule,
    StudentfieldsComponent,
    TeacherfieldsComponent,
    DetailsOflessonsComponent,
    InstructordescriptionComponent,
 ]
})
export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructoraccountsPageRoutingModule } from './instructoraccounts-routing.module';

import { InstructoraccountsPage } from './instructoraccounts.page';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructoraccountsPageRoutingModule
  ],
  declarations: [InstructoraccountsPage,HeaderComponent]
})
export class InstructoraccountsPageModule {}

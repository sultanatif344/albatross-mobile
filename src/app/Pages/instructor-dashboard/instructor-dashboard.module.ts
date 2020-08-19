import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstructorDashboardPageRoutingModule } from './instructor-dashboard-routing.module';

import { InstructorDashboardPage } from './instructor-dashboard.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructorDashboardPageRoutingModule
  ],
  declarations: [InstructorDashboardPage,HeaderComponent]
})
export class InstructorDashboardPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructorlessondetailsPage } from './instructorlessondetails.page';

const routes: Routes = [
  {
    path: '',
    component: InstructorlessondetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorlessondetailsPageRoutingModule {}

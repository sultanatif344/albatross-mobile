import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessondetailsPage } from './lessondetails.page';

const routes: Routes = [
  {
    path: '',
    component: LessondetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessondetailsPageRoutingModule {}

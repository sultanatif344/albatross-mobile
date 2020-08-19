import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonrequestPage } from './lessonrequest.page';

const routes: Routes = [
  {
    path: '',
    component: LessonrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonrequestPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordedlecturesPage } from './recordedlectures.page';

const routes: Routes = [
  {
    path: '',
    component: RecordedlecturesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecordedlecturesPageRoutingModule {}

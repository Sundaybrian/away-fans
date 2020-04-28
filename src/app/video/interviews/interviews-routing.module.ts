import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterviewsPage } from './interviews.page';

const routes: Routes = [
  {
    path: '',
    component: InterviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewsPageRoutingModule {}

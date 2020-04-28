import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartialNewsPage } from './partial-news.page';

const routes: Routes = [
  {
    path: '',
    component: PartialNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartialNewsPageRoutingModule {}

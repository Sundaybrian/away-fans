import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuniorFansPage } from './junior-fans.page';

const routes: Routes = [
  {
    path: '',
    component: JuniorFansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuniorFansPageRoutingModule {}

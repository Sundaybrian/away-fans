import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassivefcPage } from './massivefc.page';

const routes: Routes = [
  {
    path: '',
    component: MassivefcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassivefcPageRoutingModule {}

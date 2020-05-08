import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipPage } from './membership.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchActionPage } from './match-action.page';

const routes: Routes = [
  {
    path: '',
    component: MatchActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchActionPageRoutingModule {}

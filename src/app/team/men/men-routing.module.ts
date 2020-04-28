import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenPage } from './men.page';

const routes: Routes = [
  {
    path: '',
    component: MenPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenPageRoutingModule {}

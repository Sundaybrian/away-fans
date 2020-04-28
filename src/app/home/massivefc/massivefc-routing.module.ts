import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassivefcPage } from './massivefc.page';

const routes: Routes = [
  {
    path: '',
    component: MassivefcPage
  },
  {
    path: 'partial-news',
    loadChildren: () => import('./partial-news/partial-news.module').then( m => m.PartialNewsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassivefcPageRoutingModule {}

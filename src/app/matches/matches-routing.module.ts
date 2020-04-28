import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchesPage } from './matches.page';

const routes: Routes = [
  {
    path: '',
    component: MatchesPage
  },
  {
    path: 'fixtures',
    loadChildren: () => import('./fixtures/fixtures.module').then( m => m.FixturesPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesPageRoutingModule {}

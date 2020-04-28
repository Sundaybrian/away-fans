import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoPage } from './video.page';

const routes: Routes = [
  {
    path: '',
    component: VideoPage
  },
  {
    path: 'all',
    loadChildren: () => import('./all/all.module').then( m => m.AllPageModule)
  },
  {
    path: 'match-action',
    loadChildren: () => import('./match-action/match-action.module').then( m => m.MatchActionPageModule)
  },
  {
    path: 'interviews',
    loadChildren: () => import('./interviews/interviews.module').then( m => m.InterviewsPageModule)
  },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then( m => m.FeaturesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoPageRoutingModule {}

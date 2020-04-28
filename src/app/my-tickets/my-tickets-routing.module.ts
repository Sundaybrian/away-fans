import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTicketsPage } from './my-tickets.page';

const routes: Routes = [
  {
    path: '',
    component: MyTicketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTicketsPageRoutingModule {}

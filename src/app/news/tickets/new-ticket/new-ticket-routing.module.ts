import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTicketPage } from './new-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: NewTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTicketPageRoutingModule {}

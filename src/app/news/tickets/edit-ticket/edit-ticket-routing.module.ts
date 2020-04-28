import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTicketPage } from './edit-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: EditTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTicketPageRoutingModule {}

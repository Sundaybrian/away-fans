import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketsPage } from './tickets.page';

const routes: Routes = [
  {
    path: '',
    component: TicketsPage
  },
  {
    path: 'ticket-detail',
    loadChildren: () => import('./ticket-detail/ticket-detail.module').then( m => m.TicketDetailPageModule)
  },
  {
    path: 'new-ticket',
    loadChildren: () => import('./new-ticket/new-ticket.module').then( m => m.NewTicketPageModule)
  },
  {
    path: 'edit-ticket',
    loadChildren: () => import('./edit-ticket/edit-ticket.module').then( m => m.EditTicketPageModule)
  },
  {
    path: 'ticket-booking',
    loadChildren: () => import('./ticket-booking/ticket-booking.module').then( m => m.TicketBookingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsPageRoutingModule {}

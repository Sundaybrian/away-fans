import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketBookingPage } from './ticket-booking.page';

const routes: Routes = [
  {
    path: '',
    component: TicketBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketBookingPageRoutingModule {}

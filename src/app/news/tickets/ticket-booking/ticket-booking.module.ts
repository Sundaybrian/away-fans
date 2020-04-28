import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketBookingPageRoutingModule } from './ticket-booking-routing.module';

import { TicketBookingPage } from './ticket-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketBookingPageRoutingModule
  ],
  declarations: [TicketBookingPage]
})
export class TicketBookingPageModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MyTicketsPageRoutingModule } from "./my-tickets-routing.module";

import { MyTicketsPage } from "./my-tickets.page";
import { TicketBookingModalComponent } from "./ticket-booking-modal/ticket-booking-modal.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MyTicketsPageRoutingModule],
  declarations: [MyTicketsPage, TicketBookingModalComponent],
  entryComponents: [TicketBookingModalComponent],
})
export class MyTicketsPageModule {}

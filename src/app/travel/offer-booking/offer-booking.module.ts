import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OfferBookingPageRoutingModule } from "./offer-booking-routing.module";

import { OfferBookingPage } from "./offer-booking.page";
import { OfferItemModalComponent } from "../offer-item-modal/offer-item-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferBookingPageRoutingModule,
  ],
  declarations: [OfferBookingPage, OfferItemModalComponent],
  entryComponents: [OfferItemModalComponent],
})
export class OfferBookingPageModule {}

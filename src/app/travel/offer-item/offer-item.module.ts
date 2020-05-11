import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferItemPageRoutingModule } from './offer-item-routing.module';

import { OfferItemPage } from './offer-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferItemPageRoutingModule
  ],
  declarations: [OfferItemPage]
})
export class OfferItemPageModule {}

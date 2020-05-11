import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferItemPage } from './offer-item.page';

const routes: Routes = [
  {
    path: '',
    component: OfferItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferItemPageRoutingModule {}

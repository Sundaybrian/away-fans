import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralDetailsModalPageRoutingModule } from './general-details-modal-routing.module';

import { GeneralDetailsModalPage } from './general-details-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralDetailsModalPageRoutingModule
  ],
  declarations: [GeneralDetailsModalPage]
})
export class GeneralDetailsModalPageModule {}

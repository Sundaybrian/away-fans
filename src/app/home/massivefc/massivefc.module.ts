import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MassivefcPageRoutingModule } from './massivefc-routing.module';

import { MassivefcPage } from './massivefc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MassivefcPageRoutingModule
  ],
  declarations: [MassivefcPage]
})
export class MassivefcPageModule {}

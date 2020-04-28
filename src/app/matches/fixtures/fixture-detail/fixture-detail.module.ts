import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixtureDetailPageRoutingModule } from './fixture-detail-routing.module';

import { FixtureDetailPage } from './fixture-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixtureDetailPageRoutingModule
  ],
  declarations: [FixtureDetailPage]
})
export class FixtureDetailPageModule {}

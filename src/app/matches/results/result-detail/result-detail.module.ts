import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultDetailPageRoutingModule } from './result-detail-routing.module';

import { ResultDetailPage } from './result-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultDetailPageRoutingModule
  ],
  declarations: [ResultDetailPage]
})
export class ResultDetailPageModule {}

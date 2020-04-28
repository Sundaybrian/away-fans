import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartialNewsPageRoutingModule } from './partial-news-routing.module';

import { PartialNewsPage } from './partial-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartialNewsPageRoutingModule
  ],
  declarations: [PartialNewsPage]
})
export class PartialNewsPageModule {}

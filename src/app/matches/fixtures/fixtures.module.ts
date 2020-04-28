import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixturesPageRoutingModule } from './fixtures-routing.module';

import { FixturesPage } from './fixtures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FixturesPageRoutingModule
  ],
  declarations: [FixturesPage]
})
export class FixturesPageModule {}

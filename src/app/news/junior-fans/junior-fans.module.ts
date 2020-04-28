import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuniorFansPageRoutingModule } from './junior-fans-routing.module';

import { JuniorFansPage } from './junior-fans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuniorFansPageRoutingModule
  ],
  declarations: [JuniorFansPage]
})
export class JuniorFansPageModule {}

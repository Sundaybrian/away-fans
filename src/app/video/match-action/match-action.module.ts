import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchActionPageRoutingModule } from './match-action-routing.module';

import { MatchActionPage } from './match-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchActionPageRoutingModule
  ],
  declarations: [MatchActionPage]
})
export class MatchActionPageModule {}

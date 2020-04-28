import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTicketPageRoutingModule } from './new-ticket-routing.module';

import { NewTicketPage } from './new-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTicketPageRoutingModule
  ],
  declarations: [NewTicketPage]
})
export class NewTicketPageModule {}

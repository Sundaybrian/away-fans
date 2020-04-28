import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTicketPageRoutingModule } from './edit-ticket-routing.module';

import { EditTicketPage } from './edit-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTicketPageRoutingModule
  ],
  declarations: [EditTicketPage]
})
export class EditTicketPageModule {}

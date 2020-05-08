import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AccountPageRoutingModule } from "./account-routing.module";

import { AccountPage } from "./account.page";
import { GeneralDetailsModalPage } from "./general-details-modal/general-details-modal.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AccountPageRoutingModule],
  declarations: [AccountPage, GeneralDetailsModalPage],
  entryComponents: [GeneralDetailsModalPage],
})
export class AccountPageModule {}

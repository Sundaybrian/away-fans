import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountPage } from "./account.page";

const routes: Routes = [
  {
    path: "",
    component: AccountPage,
  },
  {
    path: "general-details-modal",
    loadChildren: () =>
      import("./general-details-modal/general-details-modal.module").then(
        (m) => m.GeneralDetailsModalPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}

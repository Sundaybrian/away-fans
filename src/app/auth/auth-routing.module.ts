import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthPage } from "./auth.page";
import { AuthGuard } from "../services/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: AuthPage,
  },
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountPageModule),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsPageModule),
  },
  {
    path: "alerts",
    loadChildren: () =>
      import("./alerts/alerts.module").then((m) => m.AlertsPageModule),
  },
  {
    path: "membership",
    loadChildren: () =>
      import("./membership/membership.module").then(
        (m) => m.MembershipPageModule
      ),
  },
  {
    path: "my-tickets",
    loadChildren: () =>
      import("../my-tickets/my-tickets.module").then(
        (m) => m.MyTicketsPageModule
      ),
  },
  {
    path: "shop",
    loadChildren: () =>
      import("../shop/shop.module").then((m) => m.ShopPageModule),
  },
  {
    path: "travel",
    loadChildren: () =>
      import("../travel/travel.module").then((m) => m.TravelPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}

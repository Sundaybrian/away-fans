import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FixturesPage } from "./fixtures.page";

const routes: Routes = [
  {
    path: "",
    component: FixturesPage,
  },
  {
    path: "fixture-detail",
    loadChildren: () =>
      import("./fixture-detail/fixture-detail.module").then(
        (m) => m.FixtureDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixturesPageRoutingModule {}

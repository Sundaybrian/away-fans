import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewsPage } from "./news.page";

const routes: Routes = [
  {
    path: "",
    component: NewsPage,
  },
  {
    path: "all",
    loadChildren: () => import("./all/all.module").then((m) => m.AllPageModule),
  },
  {
    path: "tickets",
    loadChildren: () =>
      import("./tickets/tickets.module").then((m) => m.TicketsPageModule),
  },
  {
    path: "club",
    loadChildren: () =>
      import("./club/club.module").then((m) => m.ClubPageModule),
  },
  {
    path: "junior-fans",
    loadChildren: () =>
      import("./junior-fans/junior-fans.module").then(
        (m) => m.JuniorFansPageModule
      ),
  },
  {
    path: "news-detail/:id",
    loadChildren: () =>
      import("./news-detail/news-detail.module").then(
        (m) => m.NewsDetailPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsPageRoutingModule {}

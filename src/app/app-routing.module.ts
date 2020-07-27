import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
    canLoad: [AuthGuard],
  },

  {
    path: "auth",
    loadChildren: () =>
      import("./auth/auth.module").then((m) => m.AuthPageModule),
  },
  // {
  //   path: "matches",
  //   loadChildren: () =>
  //     import("./matches/matches.module").then((m) => m.MatchesPageModule),
  //   canLoad: [AuthGuard],
  // },
  // {
  //   path: "video",
  //   loadChildren: () =>
  //     import("./video/video.module").then((m) => m.VideoPageModule),
  //   canLoad: [AuthGuard],
  // },
  // {
  //   path: "news",
  //   loadChildren: () =>
  //     import("./news/news.module").then((m) => m.NewsPageModule),
  //   canLoad: [AuthGuard],
  // },
  // {
  //   path: "team",
  //   loadChildren: () =>
  //     import("./team/team.module").then((m) => m.TeamPageModule),
  //   canLoad: [AuthGuard],
  // },
  // {
  //   path: "my-tickets",
  //   loadChildren: () =>
  //     import("./my-tickets/my-tickets.module").then(
  //       (m) => m.MyTicketsPageModule
  //     ),
  //   canLoad: [AuthGuard],
  // },
  // {
  //   path: "travel",
  //   loadChildren: () =>
  //     import("./travel/travel.module").then((m) => m.TravelPageModule),
  //   canLoad: [AuthGuard],
  // },
  // {
  //   path: "shop",
  //   loadChildren: () =>
  //     import("./shop/shop.module").then((m) => m.ShopPageModule),
  //   canLoad: [AuthGuard],
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

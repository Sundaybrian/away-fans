import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomePage } from "./home.page";
import { AuthGuard } from "../services/auth.guard";

const routes: Routes = [
  {
    path: "tabs",
    component: HomePage,
    // component that had the tabs needs these child routes
    children: [
      {
        path: "massivefc",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./massivefc/massivefc.module").then(
                (m) => m.MassivefcPageModule
              ),
          },
          {
            // tslint:disable-next-line: quotemark
            path: "partial-news/:partial-news",
            loadChildren: () =>
              import("./massivefc/partial-news/partial-news.module").then(
                (m) => m.PartialNewsPageModule
              ),
          },
        ],
      },
      {
        path: "matches",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../matches/matches.module").then(
                (m) => m.MatchesPageModule
              ),
          },
        ],
      },
      {
        path: "video",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../video/video.module").then((m) => m.VideoPageModule),
          },
        ],
      },
      {
        path: "news",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../news/news.module").then((m) => m.NewsPageModule),
          },
        ],
      },
      {
        path: "team",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../team/team.module").then((m) => m.TeamPageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/home/tabs/massivefc",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/home/tabs/massivefc",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

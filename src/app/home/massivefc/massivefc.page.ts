import { Component, OnInit } from "@angular/core";
import { Article, Fixture } from "src/app/models/article.model";
import { HomeService } from "src/app/services/home.service";
import { ModalController } from "@ionic/angular";
import { FixtureResultModalComponent } from "./fixture-result-modal/fixture-result-modal.component";

@Component({
  selector: "app-massivefc",
  templateUrl: "./massivefc.page.html",
  styleUrls: ["./massivefc.page.scss"],
})
export class MassivefcPage implements OnInit {
  articles: Article[] = [];
  videos: Article[] = [];
  isLoading = true;
  constructor(
    private homesrvc: HomeService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    // fetch articles

    this.homesrvc
      .getArticles()
      .toPromise()
      .then((res: Article[]) => {
        this.articles = res;
        this.homesrvc._articles = res;
        this.videos = [...this.articles.slice(18)];
        this.isLoading = false;
        console.log(this.articles, "-------");
      });
  }

  openModal() {
    // will open a modal for the result/latest cards
    this.modalCtrl
      .create({
        component: FixtureResultModalComponent,
        componentProps: {
          fixture: {
            id: "1",
            date: "sat 2nd May - 1700",
            stadium: "GiveMeAJobo Stadium",
            logoHome: "",
            logoAway: "",
            home: "MassiveFc",
            away: "Kariobangi si sharks",
          },
        },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}

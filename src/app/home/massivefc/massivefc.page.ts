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
      .then((res) => {
        console.log(res["results"]);

        this.articles = res["results"];
        this.homesrvc._articles = this.articles;
        this.isLoading = false;
      });

    // fetch videos
    // this.homesrvc.getVideos().toPromise().then(res => {
    //   this.vide
    // })
  }

  openModal(fixture: Article) {
    // will open a modal for the result/latest cards
    this.modalCtrl
      .create({
        component: FixtureResultModalComponent,
        componentProps: {
          fixture,
        },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      });
  }
}

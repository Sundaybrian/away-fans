import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article.model";
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
  constructor(
    private homesrvc: HomeService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    // fetch articles

    this.articles = this.homesrvc.articles;
    console.log(this.articles);
  }

  openModal() {
    // will open a modal for the result/latest cards
    this.modalCtrl
      .create({
        component: FixtureResultModalComponent,
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}

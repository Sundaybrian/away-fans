import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "src/app/models/article.model";
import { NavController } from "@ionic/angular";
import { HomeService } from "src/app/services/home.service";

@Component({
  selector: "app-partial-news",
  templateUrl: "./partial-news.page.html",
  styleUrls: ["./partial-news.page.scss"],
})
export class PartialNewsPage implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private homeSrvc: HomeService
  ) {}

  ngOnInit() {
    // grabbing the id of a partial news from the url
    this.route.paramMap.subscribe((paramMap) => {
      // if no place id return to massivefc
      if (!paramMap.has("partial-news")) {
        this.navCtrl.navigateBack("/home/tabs/massivefc");
        return;
      }
      // getting a single article
      this.article = this.homeSrvc.getArticle(paramMap.get("partial-news"));
    });
  }
}

import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article.model";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { HomeService } from "src/app/services/home.service";

@Component({
  selector: "app-news-detail",
  templateUrl: "./news-detail.page.html",
  styleUrls: ["./news-detail.page.scss"],
})
export class NewsDetailPage implements OnInit {
  article: Article;

  constructor(
    private activateRoute: ActivatedRoute,
    private navCtrl: NavController,
    private homeSrvc: HomeService
  ) {}

  ngOnInit() {
    // get id of new detail
    this.activateRoute.paramMap.subscribe((paraMap) => {
      if (!paraMap.has("id")) {
        this.navCtrl.navigateBack("/home/tabs/news");
        return;
      }
      // get article
      this.article = this.homeSrvc.getArticle(paraMap.get("id"));
      console.log("--------", this.article);
    });
  }
}

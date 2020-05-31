import { Component, OnInit } from "@angular/core";
import { Article } from "../models/article.model";
import { HomeService } from "../services/home.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.page.html",
  styleUrls: ["./news.page.scss"],
})
export class NewsPage implements OnInit {
  articles: Article[] = [];
  items: Article[];
  isLoading = true;

  constructor(private homeSrvc: HomeService) {}

  ngOnInit() {
    this.homeSrvc
      .getArticles(1, 10)
      .toPromise()
      .then((res) => {
        this.articles = res["results"];
        this.items = this.articles.slice(1);
        this.isLoading = false;
        this.homeSrvc._articles = res["results"];
      });
  }
}

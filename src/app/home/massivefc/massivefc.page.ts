import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article.model";
import { HomeService } from "src/app/services/home.service";

@Component({
  selector: "app-massivefc",
  templateUrl: "./massivefc.page.html",
  styleUrls: ["./massivefc.page.scss"],
})
export class MassivefcPage implements OnInit {
  articles: Article[] = [];
  constructor(private homesrvc: HomeService) {}

  ngOnInit() {
    // fetch articles

    this.articles = this.homesrvc.articles;
    console.log(this.articles);
  }
}

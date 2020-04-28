import { Injectable } from "@angular/core";
import { Article } from "../models/article.model";
import items from "../../assets/articles";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  // tslint:disable-next-line: variable-name
  private _articles: Article[] = [];

  get articles() {
    return [...this._articles];
  }

  generateArticles(items) {
    // looping the exported local data to create articles
    this._articles = items.map((item) => {
      return new Article(
        item.id,
        item.title,
        item.subtitle,
        item.description,
        item.imgUrl
      );
    });
  }

  constructor() {}
}

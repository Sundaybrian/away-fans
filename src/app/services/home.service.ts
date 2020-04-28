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

  generateArticles(arr) {
    // looping the exported local data to create articles
    this._articles = arr.map((item) => {
      return new Article(
        item.id,
        item.title,
        item.subtitle,
        item.description,
        item.imageUrl
      );
    });
  }

  constructor() {
    // populate articles array
    this.generateArticles(items);
  }

  getArticle(id: string) {
    // fetch a single article
    return { ...this._articles.find((a) => a.id === id) };
  }
}

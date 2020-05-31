import { Injectable } from "@angular/core";
import { Article, Video } from "../models/article.model";
import items from "../../assets/articles";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

let url = environment.baseUrl;

@Injectable({
  providedIn: "root",
})
export class HomeService {
  // tslint:disable-next-line: variable-name
  _articles: Article[] = [];
  _videos: Video[] = [];

  constructor(private http: HttpClient) {
    // populate articles array
    this.getArticles();
  }

  get articles() {
    return [...this._articles];
  }

  getArticle(id: string) {
    // fetch a single article
    return { ...this._articles.find((a) => a._id === id) };
  }

  getArticles(page = 1, limit = 5, sort_by = "-scrappedDate") {
    // fetch all articles
    // the params are page. limit , category are all optional
    return this.http.get(
      `${url}/clubArticles?page=${page}&limit=${limit}&sorty_by=${sort_by}`
    );
  }

  get videos() {
    return [...this._videos];
  }

  getVideos(page = 1, limit = 4) {
    // fetch videos
    return this.http.get(`${url}/videos?page=${page}&limit=${limit}`);
  }
}

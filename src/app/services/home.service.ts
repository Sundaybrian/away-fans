import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  // tslint:disable-next-line: variable-name
  private _articles = [];

  get articles() {
    return [...this._articles];
  }

  constructor() {}
}

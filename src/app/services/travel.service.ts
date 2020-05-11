import { Injectable } from "@angular/core";
import { Travel } from "../models/article.model";

@Injectable({
  providedIn: "root",
})
export class TravelService {
  private _travel: Travel[] = [
    new Travel(
      1,
      "kbe 4678",
      "lorem lorem lorem",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&w=1000&q=80",
      "abc",
      false,
      "3"
    ),
    new Travel(
      2,
      "kbe 467h",
      "lorem lorem lorem",
      "https://i.pinimg.com/originals/45/74/c6/4574c68d814dc0d3a64611ee401ea7dc.jpg",
      "abc",
      false,
      "3"
    ),
    new Travel(
      3,
      "kbe 467k",
      "lorem lorem lorem",
      "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "abc",
      false,
      "5"
    ),
    new Travel(
      4,
      "kbe 467o",
      "lorem lorem lorem",
      "https://lh3.googleusercontent.com/2d9X5D7gCzh9mV65AT6KiF37PsMZgN4t-rA_Cp6kqIsGFBuh0oABr0SorZMKa7rQo8PfLN90tQ=w640-h400-e365",
      "abc",
      false,
      "3"
    ),
    new Travel(
      5,
      "kbe 467n",
      "lorem lorem lorem",
      "https://lh3.googleusercontent.com/proxy/7WIP7l76PBkPRJeRFBoft3XynA_b1P_8S6hbNlqqOLyxn7mCpzTW5-Cs37dB2pBJg6oGcT1IrxOFgSdJmVvAuMq-mxLbQGsKB1M853eU-Y3g3uZR5wmHa0iD2-U3IMGdh2p9C6OOe7i1bkDX7HrSCg2tHVTi",
      "abc",
      false,
      "2"
    ),
  ];

  get travel() {
    return [...this._travel];
  }

  constructor() {}
}

import { Injectable } from "@angular/core";
import tickets from "../../assets/tickets.js";
import { Ticket } from "../models/article.model.js";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  private _tickets: Ticket[] = [];

  get tickets() {
    return [...this._tickets];
  }

  constructor() {
    this._tickets = tickets.map((item) => {
      return new Ticket(
        item.id,
        item.title,
        item.competition,
        item.subtitle,
        item.imageUrl,
        item.user
      );
    });
  }
}

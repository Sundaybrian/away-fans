import { Injectable } from "@angular/core";
import tickets from "../../assets/tickets.js";
import { Ticket } from "../models/article.model.js";
import { BehaviorSubject } from "rxjs";
import { take, tap, delay } from "rxjs/operators";

export class BookingTicket {
  constructor(
    public id: string,
    public userId: string,
    public ticket: Ticket,
    public tickets: number
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class TicketService {
  private _tickets: Ticket[] = [];
  private _bookings = new BehaviorSubject<BookingTicket[]>([]);

  get tickets() {
    return [...this._tickets];
  }

  get bookings() {
    return this._bookings.asObservable();
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

  addBooking(userId: string, ticket: Ticket, count: number) {
    const newBooking = new BookingTicket(
      Math.random().toString(),
      userId,
      ticket,
      count
    );

    return this.bookings.pipe(
      take(1),
      delay(1200), //simulating booking
      tap((bookingsArr) => {
        this._bookings.next(bookingsArr.concat(newBooking));
      })
    );
  }
}

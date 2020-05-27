import { Injectable } from "@angular/core";
import { Booking } from "../models/article.model";
import { BehaviorSubject } from "rxjs";
import { AuthService } from "./auth.service";
import { take, tap, delay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BookingService {
  private _bookings = new BehaviorSubject<Booking[]>([]);

  get bookings() {
    return this._bookings.asObservable();
  }

  constructor(private authSrvc: AuthService) {}

  addBooking(
    vehicleId: string,
    vehicleTitle: string,
    vehicleImg: string,
    firstName: string,
    lastName: string,
    capacity: number,
    dateFrom: Date,
    dateTo: Date
  ) {
    const newBooking = new Booking(
      Math.random().toString(),
      vehicleId,
      this.authSrvc.userId,
      vehicleTitle,
      vehicleImg,
      capacity,
      firstName,
      lastName,
      dateFrom,
      dateTo
    );

    return this.bookings.pipe(
      take(1),
      delay(1200),
      tap((bookingsArr) => {
        this._bookings.next(bookingsArr.concat(newBooking));
      })
    );
  }

  cancelBooking(bookingId) {}
}

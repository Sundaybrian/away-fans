import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Ticket } from "src/app/models/article.model";
import { ModalController } from "@ionic/angular";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-ticket-booking-modal",
  templateUrl: "./ticket-booking-modal.component.html",
  styleUrls: ["./ticket-booking-modal.component.scss"],
})
export class TicketBookingModalComponent implements OnInit {
  @Input() ticket: Ticket;
  @ViewChild("f", { static: false }) form: NgForm;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  onBookTicket() {
    // dismiss modal but send data back
    this.modalCtrl.dismiss(
      {
        bookingData: {
          // firstName: this.form.value["first"],
          // lastName: this.form.value["last"],
          ticket: this.ticket,
          tickets: +this.form.value["tickets"],
          // from: new Date(this.form.value["from"]),
          // to: new Date(this.form.value["to"]),
        },
      },
      "confirm"
    );
  }
}

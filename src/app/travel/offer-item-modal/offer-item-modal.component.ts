import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Travel } from "src/app/models/article.model";
import { ModalController } from "@ionic/angular";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-offer-item-modal",
  templateUrl: "./offer-item-modal.component.html",
  styleUrls: ["./offer-item-modal.component.scss"],
})
export class OfferItemModalComponent implements OnInit {
  @Input() vehicle: Travel;
  @Input() mode: string;
  startDate: string;
  endDate: string;
  @ViewChild("f") form: NgForm;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    const from = new Date(this.vehicle.from);
    const to = new Date(this.vehicle.to);

    if (this.mode == "random") {
      this.startDate = new Date(
        from.getTime() +
          Math.random() * (to.getTime() - 7 * 24 * 3600 * 1000 - from.getTime())
      ).toISOString();

      this.endDate = new Date(
        new Date(this.startDate).getTime() +
          Math.random() *
            (new Date(this.startDate).getTime() +
              5 * 24 * 3600 * 1000 -
              new Date(this.startDate).getTime())
      ).toISOString();
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  onBookVehicle() {
    // dismiss modal but send data back
    this.modalCtrl.dismiss(
      {
        bookingData: {
          firstName: this.form.value["first"],
          lastName: this.form.value["last"],
          id: this.form.value["id"],
          passengers: this.form.value["passengers"],
          from: this.form.value["from"],
          to: this.form.value["to"],
        },
      },
      "confirm"
    );
  }

  datesValid() {
    const startDate = new Date(this.form.value["from"]);
    const endDate = new Date(this.form.value["to"]);

    return endDate > startDate;
  }
}

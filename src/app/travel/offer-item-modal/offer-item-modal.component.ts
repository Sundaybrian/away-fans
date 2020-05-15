import { Component, OnInit, Input } from "@angular/core";
import { Travel } from "src/app/models/article.model";
import { ModalController } from "@ionic/angular";

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

  onBookVehicle(formData) {
    // dismiss modal but send data back
    this.modalCtrl.dismiss(formData, "cancel");
  }
}

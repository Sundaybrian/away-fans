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

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }
}

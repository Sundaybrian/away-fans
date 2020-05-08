import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-general-details-modal",
  templateUrl: "./general-details-modal.page.html",
  styleUrls: ["./general-details-modal.page.scss"],
})
export class GeneralDetailsModalPage implements OnInit {
  @Input() user;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }
}

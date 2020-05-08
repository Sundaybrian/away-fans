import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { GeneralDetailsModalPage } from "./general-details-modal/general-details-modal.page";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  openModal() {
    // open general details modal
    this.modalCtrl
      .create({
        component: GeneralDetailsModalPage,
        componentProps: {
          user: {
            id: 1,
            name: "Amos Okumu",
          },
        },
      })
      .then((modalEL) => {
        modalEL.present();
      });
  }
}

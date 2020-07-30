import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { GeneralDetailsModalPage } from "./general-details-modal/general-details-modal.page";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  openModal() {
    // open general details modal
    this.modalCtrl
      .create({
        component: GeneralDetailsModalPage,
        componentProps: {
          user: {
            id: this.authService.userId,
            name: this.authService.currentUser.email,
          },
        },
      })
      .then((modalEL) => {
        modalEL.present();
      });
  }
}

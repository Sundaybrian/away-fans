import { Component, OnInit, OnDestroy } from "@angular/core";
import { Travel } from "src/app/models/article.model";
import { ActivatedRoute, Router } from "@angular/router";
import { TravelService } from "src/app/services/travel.service";
import {
  NavController,
  ActionSheetController,
  ModalController,
} from "@ionic/angular";
import { OfferItemModalComponent } from "../offer-item-modal/offer-item-modal.component";
import { Subscription } from "rxjs";
import { BookingService } from "src/app/services/booking.service";

@Component({
  selector: "app-offer-booking",
  templateUrl: "./offer-booking.page.html",
  styleUrls: ["./offer-booking.page.scss"],
})
export class OfferBookingPage implements OnInit, OnDestroy {
  vehicle: Travel;
  vehicleSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private travelSrvc: TravelService,
    private navCtrl: NavController,
    private actionSheet: ActionSheetController,
    private modalCtrl: ModalController,
    private bookingSrvc: BookingService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("id")) {
        // if no id of the offer redirect back
        this.navCtrl.navigateBack("/travel");
        return;
      }

      this.vehicleSub = this.travelSrvc
        .getVehicle(paramMap.get("id"))
        .subscribe((vehicle) => {
          this.vehicle = vehicle;
        });
    });
  }

  onBookVehicle() {
    this.actionSheet
      .create({
        header: "Choose an action",
        buttons: [
          {
            text: "Select Date",
            handler: () => {
              // booking modal
              console.log("select");

              this.onBookingModal("select");
            },
          },
          {
            text: "Random Date",
            handler: () => {
              this.onBookingModal("random");
            },
          },
          {
            text: "Cancel",
            role: "cancel",
          },
        ],
      })
      .then((actionEL) => {
        actionEL.present();
      });
  }

  onBookingModal(mode) {
    this.modalCtrl
      .create({
        component: OfferItemModalComponent,
        componentProps: {
          vehicle: this.vehicle,
          mode,
        },
      })
      .then((modalEL) => {
        modalEL.present();
        return modalEL.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
      });
  }

  ngOnDestroy() {
    this.vehicleSub.unsubscribe();
  }
}

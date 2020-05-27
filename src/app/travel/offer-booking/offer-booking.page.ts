import { Component, OnInit, OnDestroy } from "@angular/core";
import { Travel } from "src/app/models/article.model";
import { ActivatedRoute, Router } from "@angular/router";
import { TravelService } from "src/app/services/travel.service";
import {
  NavController,
  ActionSheetController,
  ModalController,
  LoadingController,
} from "@ionic/angular";
import { OfferItemModalComponent } from "../offer-item-modal/offer-item-modal.component";
import { Subscription } from "rxjs";
import { BookingService } from "src/app/services/booking.service";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-offer-booking",
  templateUrl: "./offer-booking.page.html",
  styleUrls: ["./offer-booking.page.scss"],
})
export class OfferBookingPage implements OnInit, OnDestroy {
  vehicle: Travel;
  vehicleSub: Subscription;
  isBookable = false;

  constructor(
    private route: ActivatedRoute,
    private travelSrvc: TravelService,
    private navCtrl: NavController,
    private actionSheet: ActionSheetController,
    private modalCtrl: ModalController,
    private bookingSrvc: BookingService,
    private loadingCtrl: LoadingController,
    private authService: AuthService
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
          // checking if vehicle is yours so you dont book it
          this.isBookable = this.vehicle.user != this.authService.userId;
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
        // after submitiing the form in the modal
        this.loadingCtrl
          .create({
            message: "Booking Vehicle...",
          })
          .then((loadingEl) => {
            loadingEl.present();

            if (resultData.role == "confirm") {
              this.bookingSrvc
                .addBooking(
                  this.vehicle.id,
                  this.vehicle.title,
                  this.vehicle.imageUrl,
                  resultData.data.firstName,
                  resultData.data.lastName,
                  resultData.data.capacity,
                  resultData.data.from,
                  resultData.data.to
                )
                .subscribe(() => {
                  loadingEl.dismiss();
                });
            }
          });
      });
  }

  ngOnDestroy() {
    this.vehicleSub.unsubscribe();
  }
}

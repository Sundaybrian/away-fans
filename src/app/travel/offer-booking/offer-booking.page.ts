import { Component, OnInit } from "@angular/core";
import { Travel } from "src/app/models/article.model";
import { ActivatedRoute, Router } from "@angular/router";
import { TravelService } from "src/app/services/travel.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-offer-booking",
  templateUrl: "./offer-booking.page.html",
  styleUrls: ["./offer-booking.page.scss"],
})
export class OfferBookingPage implements OnInit {
  vehicle: Travel;

  constructor(
    private route: ActivatedRoute,
    private travelSrvc: TravelService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("id")) {
        // if no id of the offer redirect back
        this.navCtrl.navigateBack("/travel");
      }

      this.vehicle = this.travelSrvc.getVehicle(paramMap.get("id"));
    });
  }

  onBookVehicle() {
    console.log("booked");
  }
}

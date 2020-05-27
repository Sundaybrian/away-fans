import { Component, OnInit, OnDestroy } from "@angular/core";
import { Travel } from "../models/article.model";
import { TravelService } from "../services/travel.service";
import { SegmentChangeEventDetail } from "@ionic/core";
import { IonItemSliding } from "@ionic/angular";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { take, map } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-travel",
  templateUrl: "./travel.page.html",
  styleUrls: ["./travel.page.scss"],
})
export class TravelPage implements OnInit, OnDestroy {
  vehicles: Travel[];
  relevantVehicles: Travel[];
  vehiclesSub: Subscription;

  constructor(
    private travel: TravelService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // subcribe to the travels observable
    this.vehiclesSub = this.travel.travels.subscribe((data) => {
      console.log(data);
      this.vehicles = data;
      this.relevantVehicles = data;
    });
  }

  onSegmentChanged(e: CustomEvent<SegmentChangeEventDetail>) {
    if (e.detail.value == "all") {
      // load all places where owner is
      this.vehicles = this.relevantVehicles;
    } else {
      // create a new observable that returns a filtered data stream of vehicles
      this.vehicles = this.relevantVehicles.filter(
        (vehicle) => vehicle.user != this.authService.userId
      );
    }
  }

  onOfferEdit(id: string, slidingItem: IonItemSliding) {
    console.log(id, slidingItem);
    slidingItem.close();

    this.router.navigateByUrl(`/travel/edit-offer/${id}`);
  }

  ngOnDestroy() {
    this.vehiclesSub.unsubscribe();
  }
}

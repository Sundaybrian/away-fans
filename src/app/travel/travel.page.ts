import { Component, OnInit } from "@angular/core";
import { Travel } from "../models/article.model";
import { TravelService } from "../services/travel.service";
import { IonItemSliding } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-travel",
  templateUrl: "./travel.page.html",
  styleUrls: ["./travel.page.scss"],
})
export class TravelPage implements OnInit {
  vehicles: Travel[] = [];

  constructor(private travel: TravelService, private router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    // populate vehicles array
    this.vehicles = this.travel.travels;
    console.log(this.vehicles);
  }

  onOfferEdit(id: string, slidingItem: IonItemSliding) {
    console.log(id, slidingItem);
    slidingItem.close();

    this.router.navigateByUrl(`/travel/edit-offer/${id}`);
  }
}

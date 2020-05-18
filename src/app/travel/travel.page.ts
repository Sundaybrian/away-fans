import { Component, OnInit } from "@angular/core";
import { Travel } from "../models/article.model";
import { TravelService } from "../services/travel.service";
import { IonItemSliding } from "@ionic/angular";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-travel",
  templateUrl: "./travel.page.html",
  styleUrls: ["./travel.page.scss"],
})
export class TravelPage implements OnInit {
  vehicles: Observable<Travel[]>;

  constructor(private travel: TravelService, private router: Router) {}

  ngOnInit() {
    // subcribe to the travels observable
    this.vehicles = this.travel.travels;
  }

  onOfferEdit(id: string, slidingItem: IonItemSliding) {
    console.log(id, slidingItem);
    slidingItem.close();

    this.router.navigateByUrl(`/travel/edit-offer/${id}`);
  }
}

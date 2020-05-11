import { Component, OnInit } from "@angular/core";
import { TravelService } from "src/app/services/travel.service";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Travel } from "../../models/article.model";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"],
})
export class EditOfferPage implements OnInit {
  vehicle: Travel;

  constructor(
    private travel: TravelService,
    private route: ActivatedRoute,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    // check if no id in paramap
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("id")) {
        this.navCtrl.navigateBack("/travel");
        return;
      }
      //populate vehice
      this.vehicle = this.travel.getVehicle(paramMap.get("id"));
    });
  }
}

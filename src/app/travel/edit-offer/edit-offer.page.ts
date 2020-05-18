import { Component, OnInit, OnDestroy } from "@angular/core";
import { TravelService } from "src/app/services/travel.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { Travel } from "../../models/article.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"],
})
export class EditOfferPage implements OnInit, OnDestroy {
  vehicle: Travel;
  vehicleSub: Subscription;
  form: FormGroup;

  constructor(
    private travel: TravelService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    // check if no id in paramap
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("id")) {
        this.navCtrl.navigateBack("/travel");
        return;
      }
      //populate vehice
      this.vehicleSub = this.travel
        .getVehicle(paramMap.get("id"))
        .subscribe((vehicle) => {
          this.vehicle = vehicle;

          // populate edit form
          this.form = new FormGroup({
            plate: new FormControl(this.vehicle.title, {
              updateOn: "blur",
              validators: [Validators.required, Validators.minLength(6)],
            }),
            description: new FormControl(this.vehicle.description, {
              updateOn: "blur",
              validators: [Validators.required, Validators.maxLength(160)],
            }),
            // price: new FormControl(null, {
            //   updateOn: "blur",
            //   validators: [Validators.required, Validators.min(1)],
            // }),
          });
        });
    });
  }

  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
      .create({
        message: "Updating Vehicle",
      })
      .then((loadingEl) => {
        loadingEl.present();
        this.travel
          .updateVehicle(
            this.vehicle.id,
            this.form.value.plate,
            this.form.value.description
          )
          .subscribe(() => {
            loadingEl.dismiss();
            this.router.navigateByUrl("/travel");
          });
      });
  }

  ngOnDestroy() {
    this.vehicleSub.unsubscribe();
  }
}

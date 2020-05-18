import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TravelService } from "src/app/services/travel.service";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-new-offer",
  templateUrl: "./new-offer.page.html",
  styleUrls: ["./new-offer.page.scss"],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;

  constructor(
    private travel: TravelService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      plate: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.minLength(6)],
      }),
      description: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.maxLength(160)],
      }),
      price: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required, Validators.min(1)],
      }),
      capacity: new FormControl(2, {
        updateOn: "blur",
        validators: [Validators.required, Validators.min(2)],
      }),
      dateFrom: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      dateTo: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
    });
  }

  onCreateOffer() {
    if (!this.form.valid) {
      return;
    }
    // initialize loading controller
    this.loadingCtrl
      .create({
        message: "Creating vehicle offer...",
      })
      .then((loadingEl) => {
        loadingEl.present();

        this.travel
          .addVehicle(
            Math.random().toString(),
            this.form.value["plate"],
            this.form.value["description"],
            +this.form.value["price"],
            this.form.value["capacity"],
            new Date(this.form.value["dateFrom"]),
            new Date(this.form.value["dateTo"])
          )
          .subscribe(() => {
            // after the creation of a new offer
            loadingEl.dismiss();

            this.form.reset();
            this.router.navigateByUrl("/travel");
          });
      });
  }
}

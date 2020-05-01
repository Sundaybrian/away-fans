import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  isLoading = false;
  constructor(
    private authSrvc: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
    this.isLoading = true;
    this.authSrvc.login();
    // mimicing full screen loading controller
    this.loadingCtrl
      .create({
        keyboardClose: true,
        spinner: "crescent",
        message: "Authenticating...please wait",
      })
      .then((loadingEL) => {
        loadingEL.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEL.dismiss();
          this.router.navigateByUrl("/home/tabs/massivefc");
        }, 1500);
      });
  }
}

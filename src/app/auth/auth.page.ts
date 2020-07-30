import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { LoadingController, AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { format } from "url";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = false;
  constructor(
    private authSrvc: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router,
    public alert: AlertController
  ) {}

  ngOnInit() {}

  onSwitchAuthMode() {
    // switching bwtn login and signup
    this.isLogin = !this.isLogin;
  }

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }

    const email = f.value.email;
    const password = f.value.password;

    if (this.isLogin) {
      // TODO:run login func
      // TODO:redict to profile for more data collection
      this.login(email, password);
    } else {
      // run signup func
      this.authenticate(email, password);
    }
  }

  authenticate(email, password) {
    this.isLoading = true;
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: "Creating Account...please wait",
      })
      .then((loadingEl) => {
        loadingEl.present();

        return this.authSrvc.register(email, password).then((data) => {
          this.router.navigate(["/home/tabs/massivefc"]);
          loadingEl.dismiss();
          this.isLoading = false;
        });
      })
      .catch((error) => {
        this.loadingCtrl.dismiss();
        this.showAlert("Error", error.message);
      });
  }

  login(email, password) {
    this.isLoading = true;
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: "Authenticating...Please wait",
      })
      .then((loadingEl) => {
        loadingEl.present();

        return this.authSrvc.login(email, password).then(() => {
          this.router.navigate(["/home/tabs/massivefc"]);
          loadingEl.dismiss();
          this.isLoading = false;
        });
      })
      .catch((error) => {
        this.loadingCtrl.dismiss();
        this.showAlert("Error", error.message);
      });
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"],
    });

    await alert.present();
  }
}

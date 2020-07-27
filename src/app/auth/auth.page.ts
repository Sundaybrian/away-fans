import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { LoadingController } from "@ionic/angular";
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
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin(email, password) {
    this.authSrvc.login(email, password).then((result) => {
      console.log(result);
    });
    // mimicing full screen loading controller
    // this.loadingCtrl
    //   .create({
    //     keyboardClose: true,
    //     spinner: "crescent",
    //     message: "Authenticating...please wait",
    //   })
    //   .then((loadingEL) => {
    //     loadingEL.present();
    //     setTimeout(() => {
    //       this.isLoading = false;
    //       loadingEL.dismiss();
    //       this.router.navigateByUrl("/home/tabs/massivefc");
    //     }, 1500);
    //   });
  }

  onSwitchAuthMode() {
    // switching bwtn login and signup
    this.isLogin = !this.isLogin;
  }

  onSubmit(f: NgForm) {
    console.log(f);
    if (!f.valid) {
      return;
    }

    const email = f.value.email;
    const password = f.value.password;

    if (this.isLogin) {
      // TODO:run login func
      // TODO:redict to profile for more data collection
    } else {
      //run signup func
      this.authSrvc.register(email, password).then((result) => {
        console.log(result);
      });
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  constructor(private authSrvc: AuthService) {}

  ngOnInit() {}

  onLogin() {
    this.authSrvc.login();
  }
}

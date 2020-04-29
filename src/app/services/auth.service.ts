import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _currentUser = false;

  get currentUser() {
    return this._currentUser;
  }

  constructor() {}

  login() {
    this._currentUser = true;
  }

  logout() {
    this._currentUser = false;
  }
}

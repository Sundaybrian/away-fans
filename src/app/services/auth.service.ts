import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _currentUser = false;
  private _userId = "";

  get currentUser() {
    return this._currentUser;
  }

  get userId() {
    return this._userId;
  }

  constructor() {}

  login() {
    this._currentUser = true;
  }

  logout() {
    this._currentUser = false;
  }
}

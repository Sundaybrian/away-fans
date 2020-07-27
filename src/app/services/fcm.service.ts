import { Injectable } from "@angular/core";

import { Platform } from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";
import { FCM } from "@ionic-native/fcm/ngx";
import { Observable } from "rxjs";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class FcmService {
  constructor(
    private fcm: FCM,
    private afs: AngularFirestore,
    private platform: Platform,
    public afAuth: AngularFireAuth
  ) {}

  // get permisson from user

  async getToken() {
    let token;

    if (this.platform.is("android")) {
      token = await this.fcm.getToken();
    }

    this.saveToken(token);
  }

  // save token to firebase
  private saveToken(token) {
    if (!token) {
      return;
    }

    const devicesCollection = this.afs.collection("devices");
    const userId = this.afAuth.auth.currentUser.uid;

    const data = {
      userId,
      token,
      email: this.afAuth.auth.currentUser.email,
    };

    return devicesCollection.add(data);
  }

  // listen to incoming fcm messages
  onNotifications() {
    return this.fcm.onNotification();
  }

  isAuthenticated() {
    const user = this.afAuth.auth.currentUser;

    if (user) {
      return true;
    }

    return false;
  }
}

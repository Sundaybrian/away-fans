import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { FcmService } from "./fcm.service";
import {
  AlertController,
  Platform,
  LoadingController,
  ToastController,
} from "@ionic/angular";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  _isAuthenticated = false;
  private _currentUser;
  private _userId;
  token;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public fcm: FcmService,
    public alert: AlertController,
    private platform: Platform,
    public loadingctrl: LoadingController,
    public toastcontroller: ToastController,
    public afs: AngularFirestore
  ) {}

  get currentUser() {
    return this._currentUser;
  }

  getAuthenticatedUser() {
    return this._isAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  login(email, password) {
    // method to login a user

    return this.loadingctrl
      .create({
        message: "Authenticating...",
        spinner: "bubbles",
      })
      .then((loadingEl) => {
        loadingEl.present();

        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
      })
      .then((data) => {
        console.log(data, "________________________=======");

        this._currentUser = data.user;
        this._userId = data.user.uid;

        // setup notifications
        this.initializeApp();

        return data.user.getIdToken();
      })
      .then((_token) => {
        this.token = _token;
        this.loadingctrl.dismiss();
        // navigate user to home page
        this.router.navigate(["/home/tabs/massivefc"]);
      })
      .catch((error) => {
        // show errors
        this.showAlert("Error", error.message);
      });
  }

  register(email, password) {
    // to register a user
    const userCollections = this.afs.collection("users");
    return this.loadingctrl
      .create({
        message: "Creating User...",
        spinner: "bubbles",
      })
      .then((loadingEl) => {
        loadingEl.present();

        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      })
      .then((data) => {
        this._userId = data.user.uid;
        this._currentUser = data.user;

        return data.user.getIdToken();
      })
      .then((_token) => {
        this.token = _token;
        const userData = {
          email,
          userId: this.userId,
        };

        return userCollections.add(userData);
      })
      .then(() => {
        this.loadingctrl.dismiss();
        this.showAlert("Success", "Welcome to away fans");
        this.router.navigate(["/home/tabs/massivefc"]);
      })
      .catch((error) => {
        console.error(error);
        this.showAlert("Error", error.message);
      });
  }

  onLogout() {
    // logout user
    this._currentUser = this._userId = this.token = "";
    this.afAuth.auth.signOut();
    this.router.navigate(["/auth"]);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
      // check networl state
      this.notificationsSetup();
    });
  }

  // notifications setup
  private notificationsSetup() {
    this.fcm.getToken();
    this.fcm.onNotifications().subscribe((msg) => {
      if (msg.wasTapped) {
        this.presentToast(msg.wasTapped);
      } else {
        this.presentToast(msg.body);
      }
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

  // adding a toast
  private async presentToast(message) {
    const toast = await this.toastcontroller.create({
      message,
      duration: 3000,
    });
    toast.present();
  }
}

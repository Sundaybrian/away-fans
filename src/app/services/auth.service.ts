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
  private _currentUser;
  private _userId = "abc";
  private token = "";

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

  get userId() {
    return this._userId;
  }

  login(email, password) {
    // method to login a user

    this.loadingctrl
      .create({
        message: "Authenticating...",
        spinner: "bubbles",
      })
      .then((loadingEl) => {
        loadingEl.present();

        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
      })
      .then((data) => {
        this._currentUser = data;
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

  async register(email, password) {
    // to register a user
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const userCollections = this.afs.collection("users");

      const userData = {
        email,
        userId: this.afAuth.auth.currentUser.uid,
      };

      userCollections.add(userData);

      this.showAlert("Success", "Welcome to away fans");
      this.router.navigate(["/home/tabs/massivefc"]);
    } catch (error) {
      console.dir(error);
      this.showAlert("Error", error.message);
    }
  }

  onLogout() {
    // logout user
    this.afAuth.auth.signOut();
    this.router.navigate(["/login"]);
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

import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ticket } from "../models/article.model";
import { TicketService, BookingTicket } from "../services/ticket.service";
import {
  IonItemSliding,
  ActionSheetController,
  ModalController,
  LoadingController,
} from "@ionic/angular";
import { SegmentChangeEventDetail } from "@ionic/core";
import { AuthService } from "../services/auth.service";
import { TicketBookingModalComponent } from "./ticket-booking-modal/ticket-booking-modal.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-my-tickets",
  templateUrl: "./my-tickets.page.html",
  styleUrls: ["./my-tickets.page.scss"],
})
export class MyTicketsPage implements OnInit, OnDestroy {
  tickets: BookingTicket[] = [];
  relevantTickets: Ticket[] = [];
  bookingsSub: Subscription;
  isMine = true;
  isBookable = false;

  constructor(
    private tcktSrvc: TicketService,
    private actionSheet: ActionSheetController,
    private authService: AuthService,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.relevantTickets = this.tcktSrvc.tickets;
    this.bookingsSub = this.ticketService.bookings.subscribe((data) => {
      this.tickets = data;
    });
  }

  onSegmentChange(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value == "mine") {
      // this.tickets = this.relevantTickets.filter((ticket) => {
      //   return ticket.user == this.authService.userId;
      // });
      this.isMine = true;
      this.isBookable = false;
    } else {
      // this.tickets = this.relevantTickets.filter((ticket) => {
      //   return ticket.user != this.authService.userId;
      // });
      this.isMine = false;
      this.isBookable = true;
    }
  }

  onTicketTrade(id: string, slidingItem: IonItemSliding) {
    // close sliding item after clicking trade
    slidingItem.close();
    // action sheet will be added here
    this.actionSheet
      .create({
        header: "Are you sure you want to trade this ticket?",
        buttons: [
          {
            text: "Yes i want to trade...",
            handler: () => {
              // function to trade will go here
              console.log("done!!!!!!");
              console.log(id);
            },
          },
          {
            text: "No, i was just messing around...",
            role: "cancel",
          },
        ],
      })
      .then((actionSheetEL) => {
        actionSheetEL.present();
      });
  }

  onTicketBooking(ticket) {
    this.modalCtrl
      .create({
        component: TicketBookingModalComponent,
        componentProps: {
          ticket,
        },
      })
      .then((modalEL) => {
        modalEL.present();
        return modalEL.onDidDismiss();
      })
      .then((resultData) => {
        // after submitiing the form in the modal
        this.loadingCtrl
          .create({
            message: "Booking Ticket...",
          })
          .then((loadingEl) => {
            loadingEl.present();

            if (resultData.role == "confirm") {
              console.log(resultData.data);

              this.tcktSrvc
                .addBooking(
                  this.authService.userId,
                  resultData.data.bookingData.ticket,
                  resultData.data.bookingData.tickets
                )
                .subscribe(() => {
                  loadingEl.dismiss();
                  this.authService.presentToast(
                    `successfully purchased ${resultData.data.bookingData.tickets} tickets for ${resultData.data.bookingData.ticket.title} `
                  );
                });

              console.log("doooone");
            } else {
              loadingEl.dismiss();
            }
          });
      });
  }

  ngOnDestroy() {
    this.bookingsSub.unsubscribe();
  }
}

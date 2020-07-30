import { Component, OnInit } from "@angular/core";
import { Ticket } from "../models/article.model";
import { TicketService } from "../services/ticket.service";
import { IonItemSliding, ActionSheetController } from "@ionic/angular";
import { SegmentChangeEventDetail } from "@ionic/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-my-tickets",
  templateUrl: "./my-tickets.page.html",
  styleUrls: ["./my-tickets.page.scss"],
})
export class MyTicketsPage implements OnInit {
  tickets: Ticket[] = [];
  relevantTickets: Ticket[] = [];
  isMine: boolean = true;
  isBookable: boolean = false;

  constructor(
    private tcktSrvc: TicketService,
    private actionSheet: ActionSheetController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.relevantTickets = this.tcktSrvc.tickets;
    this.tickets = this.relevantTickets.filter((ticket) => {
      return ticket.user == this.authService.userId;
    });
  }

  onSegmentChange(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value == "mine") {
      this.tickets = this.relevantTickets.filter((ticket) => {
        return ticket.user == this.authService.userId;
      });
      this.isMine = true;
      this.isBookable = false;
    } else {
      this.tickets = this.relevantTickets.filter((ticket) => {
        return ticket.user != this.authService.userId;
      });
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
}

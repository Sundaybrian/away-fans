import { Component, OnInit } from "@angular/core";
import { Ticket } from "../models/article.model";
import { TicketService } from "../services/ticket.service";
import { IonItemSliding, ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-my-tickets",
  templateUrl: "./my-tickets.page.html",
  styleUrls: ["./my-tickets.page.scss"],
})
export class MyTicketsPage implements OnInit {
  tickets: Ticket[] = [];
  constructor(
    private tcktSrvc: TicketService,
    private actionSheet: ActionSheetController
  ) {}

  ngOnInit() {
    this.tickets = this.tcktSrvc.tickets;
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

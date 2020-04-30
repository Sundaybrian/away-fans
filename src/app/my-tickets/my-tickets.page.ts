import { Component, OnInit } from "@angular/core";
import { Ticket } from "../models/article.model";
import { TicketService } from "../services/ticket.service";
import { IonItemSliding } from "@ionic/angular";

@Component({
  selector: "app-my-tickets",
  templateUrl: "./my-tickets.page.html",
  styleUrls: ["./my-tickets.page.scss"],
})
export class MyTicketsPage implements OnInit {
  tickets: Ticket[] = [];
  constructor(private tcktSrvc: TicketService) {}

  ngOnInit() {
    this.tickets = this.tcktSrvc.tickets;
  }

  onTicketTrade(id: string, slidingItem: IonItemSliding) {
    // close sliding item after clicking trade
    slidingItem.close();
    // action sheet will be added here
    console.log(id);
  }
}

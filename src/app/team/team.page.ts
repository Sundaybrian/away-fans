import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";

@Component({
  selector: "app-team",
  templateUrl: "./team.page.html",
  styleUrls: ["./team.page.scss"],
})
export class TeamPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  onFilterContent(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}

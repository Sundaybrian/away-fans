import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Fixture } from "src/app/models/article.model";

@Component({
  selector: "app-fixture-result-modal",
  templateUrl: "./fixture-result-modal.component.html",
  styleUrls: ["./fixture-result-modal.component.scss"],
})
export class FixtureResultModalComponent implements OnInit {
  @Input() fixture: Fixture;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    // closing the fixture/result modal
    this.modalCtrl.dismiss();
  }
}

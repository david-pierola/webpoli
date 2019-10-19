import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  title = "SINARAP";
  status: boolean = true;

  toogleSidebar($event) {
    this.status = $event;
  }
}

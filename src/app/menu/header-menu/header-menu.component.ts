import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header-menu",
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.less"]
})
export class HeaderMenuComponent implements OnInit {
  faAlignLeft = faAlignLeft;

  @Output() toogleSidebar = new EventEmitter<boolean>();

  status: boolean = true;
  constructor() {}

  ngOnInit() {}

  clickEvent() {
    this.status = !this.status;
    this.toogleSidebar.emit(this.status);
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { faHome, faFileAlt, faTools } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-left-menu",
  templateUrl: "./left-menu.component.html",
  styleUrls: ["./left-menu.component.less"]
})
export class LeftMenuComponent implements OnInit {
  faHome = faHome;
  faFileAlt = faFileAlt;
  faTools = faTools;

  constructor() {}

  ngOnInit() {}
}

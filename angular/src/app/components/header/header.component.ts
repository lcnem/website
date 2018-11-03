import { Component, OnInit, Input } from "@angular/core";
import { GlobalDataService } from "src/app/services/global-data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(public global: GlobalDataService) {}

  @Input() position!: string;
  @Input() color!: string;

  ngOnInit() {}
}

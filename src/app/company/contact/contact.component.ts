import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject } from "rxjs";
import { LoadingDialogComponent } from "src/app/shared/loading-dialog/loading-dialog.component";
import { ApiService } from "src/app/core/services/api.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit() {}

  async onSubmit(name: string, email: string, text: string) {
    const progress$ = new BehaviorSubject(0);

    this.dialog.open(LoadingDialogComponent, { data: { progress$ } });

    await this.api.sendMail(name, email, "LCNEM Contact", text, "ja");

    progress$.next(100);
    progress$.complete();
  }
}

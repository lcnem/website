import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from '../../shared/language.service';
import { LoadingDialogComponent } from '../../shared/loading-dialog/loading-dialog.component';
import { TRANSLATION } from './dlt-subscription.translation';

@Component({
  selector: 'app-dlt-subscription',
  templateUrl: './dlt-subscription.component.html',
  styleUrls: ['./dlt-subscription.component.css']
})
export class DltSubscriptionComponent implements OnInit {
  forms: {
    name: string,
    organization: string,
    email: string,
    imagination: string,
    agree: boolean
  };

  translation = TRANSLATION;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private language: LanguageService,
  ) {
    this.forms = {
      name: '',
      organization: '',
      email: '',
      imagination: '',
      agree: false
    }
  }

  ngOnInit() {
  }

  get lang() { return this.language.code; }

  async sendMail() {
    const loadingDialog = this.dialog.open(LoadingDialogComponent, { disableClose: true });

    this.http.post(
      '/api/send-mail',
      {
        email: this.forms.email,
        name: `${this.forms.organization} ${this.forms.name}`,
        subject: 'DLT Subscription',
        text: this.forms.imagination,
        lang: this.lang
      }
    ).subscribe(
      () => {
        this.snackBar.open(this.translation.completed[this.lang], undefined, { duration: 6000 });
        this.forms = {} as any;
      },
      (error) => {
        this.snackBar.open(this.translation.error[this.lang], undefined, { duration: 6000 });
      },
      () => {
        loadingDialog.close();
      }
    );
  }
}

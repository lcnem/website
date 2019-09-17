import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from '../../shared/language.service';
import { LoadingDialogComponent } from '../../shared/loading-dialog/loading-dialog.component';
import { TRANSLATION } from './consulting-contact.translation';
import { FormControl } from '@angular/forms';
import { FlatpickrOptions } from 'ng2-flatpickr';
import Japanese from 'flatpickr/dist/l10n/ja.js';

@Component({
  selector: 'app-consulting-contact',
  templateUrl: './consulting-contact.component.html',
  styleUrls: ['./consulting-contact.component.css']
})
export class ConsultingContactComponent implements OnInit {
  options: FlatpickrOptions = {
    locale: Japanese,      // ロケールを日本
    enableTime: true,      // 時刻選択を有効
    time_24hr: true,       // 24時間表記を有効
    minDate: '2018-06-10', // 最小選択日時
  };

  forms = {} as {
    name: string,
    email: string,
    subject: string,
    agree: boolean
  };

  translation = TRANSLATION;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private language: LanguageService,
  ) { }

  ngOnInit() {
  }

  get lang() { return this.language.code; }

  async sendMail() {
    const loadingDialog = this.dialog.open(LoadingDialogComponent, { disableClose: true });

    this.http.post(
      '/api/send-mail',
      {
        email: this.forms.email,
        name: this.forms.name,
        subject: this.forms.subject,
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

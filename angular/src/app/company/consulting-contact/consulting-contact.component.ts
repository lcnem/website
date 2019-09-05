import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from '../../shared/language.service';
import { LoadingDialogComponent } from '../../shared/loading-dialog/loading-dialog.component';
import { TRANSLATION } from './consulting-contact.translation';

@Component({
  selector: 'app-consulting-contact',
  templateUrl: './consulting-contact.component.html',
  styleUrls: ['./consulting-contact.component.css']
})
export class ConsultingContactComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';
import { LanguageService } from '../../shared/language.service';
import { LoadingDialogComponent } from '../../shared/loading-dialog/loading-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private language: LanguageService,
  ) { }

  public forms = {} as {
    name: string,
    email: string,
    subject: number,
    body: string,
    agree: boolean
  };

  public translation = {
    contact: {
      en: 'Contact',
      ja: 'お問い合わせ'
    } as any,
    name: {
      en: 'Name',
      ja: 'お名前'
    } as any,
    email: {
      en: 'email',
      ja: 'メールアドレス'
    } as any,
    subject: {
      en: 'Subject',
      ja: 'お問い合わせの目的'
    } as any,
    subjects: [
      {
        en: 'About services',
        ja: 'サービスについて'
      } as any,
      {
        en: 'Partnerships',
        ja: '業務提携や投資について'
      } as any,
      {
        en: 'Consulting/Lecture',
        ja: 'コンサルティング/講師の依頼'
      } as any,
      {
        en: 'Contract development',
        ja: '受託開発の依頼'
      } as any,
    ],
    body: {
      en: 'Content',
      ja: 'お問い合わせ内容'
    } as any,
    send: {
      en: 'Send',
      ja: '送信'
    } as any,
    confirm: {
      en: 'Are you sure?',
      ja: '送信しますか？'
    } as any,
    error: {
      en: 'Error',
      ja: 'エラーが発生しました。'
    } as any,
    completed: {
      en: 'Completed',
      ja: '送信しました。'
    } as any
  };

  ngOnInit() {
  }

  public async sendMail() {
    const loadingDialog = this.dialog.open(LoadingDialogComponent, { disableClose: true });

    this.http.post(
      '/api/send-mail',
      {
        email: this.forms.email,
        name: this.forms.name,
        subject: this.translation.subjects[this.forms.subject][this.lang],
        text: this.forms.body,
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
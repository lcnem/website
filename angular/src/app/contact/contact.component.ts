import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { LoadingDialogComponent } from '../components/loading-dialog/loading-dialog.component';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(
    public global: GlobalDataService,
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  public forms = {} as {
    name: string,
    email: string,
    subject: number,
    body: string,
    agree: boolean
  };

  ngOnInit() {
  }

  public async sendMail() {
    let result = await this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this.translation.confirm[this.global.lang]
      }
    }).afterClosed().toPromise();

    let dialogRef = this.dialog.open(LoadingDialogComponent, { disableClose: true });

    try {
      await this.http.post(
        "/api/send-mail",
        {
          email: this.forms.email,
          name: this.forms.name,
          subject: this.translation.subjects[this.forms.subject][this.global.lang],
          text: this.forms.body,
          lang: this.global.lang
        }
      ).toPromise();
    } catch {
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: this.translation.error[this.global.lang]
        }
      });
      return;
    } finally {
      dialogRef.close();
    }

    this.dialog.open(AlertDialogComponent, {
      data: {
        title: this.translation.completed[this.global.lang]
      }
    });
  }

  public translation = {
    contact: {
      en: "Contact",
      ja: "お問い合わせ"
    } as any,
    name: {
      en: "Name",
      ja: "お名前"
    } as any,
    email: {
      en: "email",
      ja: "メールアドレス"
    } as any,
    subject: {
      en: "Subject",
      ja: "お問い合わせの目的"
    } as any,
    subjects: [
      {
        en: "About services",
        ja: "サービスについて"
      } as any,
      {
        en: "Partnerships",
        ja: "業務提携や投資について"
      } as any,
      {
        en: "Application for \"Emergency cosign service\"",
        ja: "「緊急時連署名サービス」申し込み"
      } as any,
      {
        en: "Consulting",
        ja: "コンサルティングの依頼"
      } as any,
    ],
    body: {
      en: "How can we help ?",
      ja: "お問い合わせ内容"
    } as any,
    send: {
      en: "send request",
      ja: "送信"
    } as any,
    confirm: {
      en: "Are you sure?",
      ja: "送信しますか？"
    } as any,
    error: {
      en: "Error",
      ja: "エラーが発生しました。"
    } as any,
    completed: {
      en: "Completed",
      ja: "送信しました。"
    } as any
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { filter, mergeMap, map } from 'rxjs/operators';
import { AlertDialogComponent } from '../../../components/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from '../../../components/confirm-dialog/confirm-dialog.component';
import { LanguageService } from '../../../services/language.service';
import { LoadingDialogComponent } from '../../../components/loading-dialog/loading-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService,
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  public forms = {} as {
    name: string,
    email: string,
    subject: number,
    body: string,
    agree: boolean
  }

  ngOnInit() {
  }

  public async sendMail() {
    await this.dialog.open(
      ConfirmDialogComponent, {
        data: {
          title: this.translation.confirm[this.lang]
        }
      }
    ).afterClosed().pipe(
      filter(result => result)
    ).toPromise()

    const loadingDialog = this.dialog.open(LoadingDialogComponent, { disableClose: true })

    this.http.post(
      "/api/send-mail",
      {
        email: this.forms.email,
        name: this.forms.name,
        subject: this.translation.subjects[this.forms.subject][this.lang],
        text: this.forms.body,
        lang: this.lang
      }
    ).subscribe(
      () => {
        this.dialog.open(
          AlertDialogComponent,
          {
            data: {
              title: this.translation.completed[this.lang]
            }
          }
        )
        this.forms = {} as any
      },
      (e) => {
        this.dialog.open(
          AlertDialogComponent,
          {
            data: {
              title: this.translation.error[this.lang]
            }
          }
        )
      },
      () => {
        loadingDialog.close()
      }
    )
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
      {
        en: "Work",
        ja: "就労の応募について"
      } as any,
      {
        en: "Request for services",
        ja: "サービスへの要望"
      } as any
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

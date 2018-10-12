import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(
    public global: GlobalDataService,
    private http: HttpClient
  ) { }

  public name?: string;
  public email?: string;
  public contactContent?: string;
  public body?: string;

  ngOnInit() {
  }

  public async sendMail() {
    try {
      await this.http.post(
        "api/sendmail",
        {
          name: this.name,
          subject: this.contactContent,
          email: this.email,
          text: this.body
        }
      ).toPromise();
    } catch {
      return;
    }
  }

  public translation = {
    contact: {
      en: "Contact LCNEM",
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
    question: {
      en: "Question",
      ja: "ご質問"
    } as any,
    opinion: {
      en: "Opinion",
      ja: "ご意見"
    } as any,
    others: {
      en: "Others",
      ja: "その他"
    } as any,
    body: {
      en: "How can we help ?",
      ja: "お問い合わせ内容"
    } as any,
    send: {
      en: "send request",
      ja: "送信"
    } as any
  }

}

import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(
    public global: GlobalDataService
  ) { }

  ngOnInit() {
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

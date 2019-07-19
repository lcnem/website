import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../shared/language.service';
@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css']
})
export class ChequeComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    gettingStarted: {
      en: 'Getting started',
      ja: '今すぐ使う'
    } as any,
    contact: {
      en: "Contact us",
      ja: "問い合わせ"
    } as any
  };
}

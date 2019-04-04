import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';
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

  public translation = {
    top: {
      en: '',
      ja: '日本初のブロックチェーン電子マネー。'
    } as any,
    gettingStarted: {
      en: 'Getting started',
      ja: '今すぐ使う'
    } as any
  };

  ngOnInit() {
  }
}

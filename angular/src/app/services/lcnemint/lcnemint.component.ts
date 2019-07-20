import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-lcnemint',
  templateUrl: './lcnemint.component.html',
  styleUrls: ['./lcnemint.component.css']
})
export class LcnemintComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    top: {
      en: 'Cosmos blockchain for LCNEM Cheque',
      ja: 'LCNEM ChequeのためのCosmosネットワークのブロックチェーン'
    } as any,
    words: {
      en: 'Words',
      ja: '用語'
    } as any,
    contact: {
      en: "Contact us",
      ja: "問い合わせ"
    } as any
  }
}

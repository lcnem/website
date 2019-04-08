import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  public ledger = [
    {
      image: 'assets/images/dlt/nem.svg',
      name: 'NEM'
    },
    {
      image: 'assets/images/lcnem.svg',
      name: 'lcnemint(予定)'
    },
    {
      image: 'assets/images/dlt/bitcoin.svg',
      name: 'Bitcoin(予定)'
    }
  ];

  public translation = {
    top: {
      en: '',
      ja: 'LCNEM Chequeに使えるウォレットアプリ'
    } as any,
    supportingLedgers: {
      en: 'Supporting ledgers',
      ja: 'サポートする台帳'
    } as any,
    gettingStarted: {
      en: 'Getting started',
      ja: '今すぐ使う'
    } as any
  };

  ngOnInit() { }
}

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

  ngOnInit() {
  }

  public ledger = [
    {
      image: 'assets/images/nem.svg',
      name: 'NEM'
    },
    {
      image: 'assets/images/lcnem.svg',
      name: 'lcnemint(予定)'
    },
    {
      image: 'assets/images/ethereum.svg',
      name: 'Ethereum(予定)'
    },
    {
      image: 'assets/images/eos.svg',
      name: 'EOS(予定)'
    },
    {
      image: 'assets/images/liquid.svg',
      name: 'Liquid by Blockstream(予定)'
    }
  ];

  public translation = {
    top: {
      en: 'Probrammable e-money with blockchain',
      ja: 'プログラマブルな電子マネーをブロックチェーンで'
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
}

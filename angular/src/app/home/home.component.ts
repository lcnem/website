import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  public service = [
    {
      name: 'LCNEM Cheque',
      link: '/services/cheque',
      image: 'assets/images/lcnem.svg',
      copy: {
        en: 'Programmable e-money on blockchains',
        ja: 'ブロックチェーン上のプログラマブル電子マネー（ステーブルコイン）'
      } as any
    },
    {
      name: 'LCNEM Wallet',
      url: 'https://wallet.lcnem.com',
      image: 'assets/images/services/wallet.png',
      copy: {
        en: 'The wallet application for blockchains',
        ja: 'ブロックチェーンを使えるウォレットアプリ'
      } as any
    },
    {
      name: 'Consulting',
      link: '/services/consulting',
      image: 'assets/images/services/consulting.png',
      copy: {
        en: 'Consulting',
        ja: 'コンサルティング'
      } as any
    },
    {
      name: 'Contract development',
      link: '/services/contract-development',
      image: 'assets/images/services/contract-development.png',
      copy: {
        en: 'Contract development',
        ja: '受託開発'
      } as any
    },
    {
      name: 'LCNEM Inside',
      url: 'https://inside.lcnem.com',
      image: 'assets/images/lcnem.svg',
      copy: {
        en: 'The media of technologies and corporate information of LCNEM',
        ja: 'LCNEMの技術・社内情報メディア'
      } as any
    },
    {
      name: 'lcnemint',
      link: '/services/lcnemint',
      image: 'assets/images/dlt/cosmos.svg',
      copy: {
        en: 'The original blockchain in Cosmos Network for LCNEM Cheque',
        ja: 'LCNEM Cheque用のCosmosネットワーク独自ブロックチェーン'
      } as any
    }
  ];

  public partners = [
    {
      name: 'Ether Security',
      link: 'http://etherinc.co/',
      image: 'assets/images/partners/etherinc_bnr.png',
      description: {
        en: 'Blockchain nodes management, validation of lcnemint',
        ja: '各種ブロックチェーンノード運用、lcnemintのバリデーション'
      } as any
    },
    {
      name: 'United Bitcoiners',
      link: 'http://www.unitedbitcoiners.com/',
      image: 'assets/images/partners/ub.png',
      description: {
        en: 'Validation of lcnemint, Lightning Network technology',
        ja: 'lcnemintのバリデーション、Lightning Network技術'
      } as any
    }
  ]

  public translation = {
    lcnem: {
      en: 'LCNEM, Inc.',
      ja: '株式会社LCNEM'
    } as any,
    top: {
      en: 'Fintech for economic welfare',
      ja: '経済厚生のためのフィンテック'
    } as any,
    services: {
      en: 'Services',
      ja: 'サービス'
    } as any,
    readMore: {
      en: 'Read more',
      ja: '詳しく見る'
    } as any,
    gettingStarted: {
      en: 'Getting started',
      ja: 'いますぐつかう'
    } as any,
    partners: {
      en: 'Partners',
      ja: 'パートナー'
    } as any
  };


  ngOnInit() { }
}

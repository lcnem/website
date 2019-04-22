import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

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
        ja: 'ブロックチェーン上の新型プログラマブル電子マネー（ステーブルコイン）'
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
    },
    {
      name: 'LCNEM Wallet',
      link: '/services/wallet',
      image: 'assets/images/wallet/billboard.png',
      copy: {
        en: 'The wallet application for using LCNEM Cheque easily',
        ja: 'LCNEM Chequeが簡単に使えるウォレットアプリ'
      } as any
    },
    {
      name: 'Ticket Peer to Peer',
      link: '/services/ticket-p2p',
      image: 'assets/images/ticket-p2p/ticket-p2p.svg',
      copy: {
        en: 'The prevention system for secondhand saling in low cost with blockchain',
        ja: 'ブロックチェーンを使った低コスト転売防止システム'
      } as any
    },
    {
      name: 'Consulting',
      link: '/services/consulting',
      image: 'assets/images/consulting/whiteboard_memo.png',
      copy: {
        en: 'Consulting',
        ja: 'コンサルティング'
      } as any
    },
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
    partners: {
      en: 'Partners',
      ja: 'パートナー'
    } as any
  };


  ngOnInit() { }
}

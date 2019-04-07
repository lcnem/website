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
        ja: 'ブロックチェーン上のプログラマブル電子マネー'
      } as any
    },
    {
      name: 'lcnemint',
      link: '/services/lcnemint',
      image: 'assets/images/cosmos.svg',
      copy: {
        en: 'The original blockchain in Cosmos Network for LCNEM Cheque',
        ja: 'LCNEM Cheque用のCosmosネットワーク独自ブロックチェーン'
      } as any
    },
    {
      name: 'LCNEM Wallet',
      link: '/services/wallet',
      image: 'assets/images/billboard.png',
      copy: {
        en: 'The wallet application for using LCNEM Cheque easily',
        ja: 'LCNEM Chequeが簡単に使えるウォレットアプリ'
      } as any
    },
    {
      name: 'Ticket Peer to Peer',
      link: '/services/ticket-p2p',
      image: 'assets/images/ticket-p2p.svg',
      copy: {
        en: 'The prevention system for secondhand saling in low cost with blockchain',
        ja: 'ブロックチェーンを使った低コスト転売防止システム'
      } as any
    },
    {
      name: 'Consulting',
      link: '/services/consulting',
      image: 'assets/images/whiteboard_memo.png',
      copy: {
        en: 'Consulting',
        ja: 'コンサルティング'
      } as any
    },
  ]

  public media = [
    {
      name: 'TechCrunch',
      url: 'https://jp.techcrunch.com/2018/09/20/lcnem-ticketp2p/',
      icon: 'assets/media/tech-crunch.svg',
      image: 'assets/images/lcnem.svg',
      title: 'ブロックチェーンでチケット転売防止、京大発スタートアップLCNEM...',
      date: '2018.9.20'
    },
    {
      name: 'CoinTelegraph',
      url:
        'https://jp.cointelegraph.com/news/lcnem-sells-nem-based-stable-coins',
      icon: 'assets/media/cointelegraph.svg',
      image: 'assets/media/coinbase.png',
      title: 'ネムウォレットのLCNEM、モザイクで発行した前払式支払手段を販売',
      date: '2018.6.25'
    },
    {
      name: '仮想通貨Watch',
      url:
        'https://crypto.watch.impress.co.jp/img/ctw/docs/1138/641/html/image01_o.jpg.html',
      icon: 'assets/media/crypto-watch.png',
      image: 'assets/media/crypto-watch.jpg',
      title: '金融庁がLCNEMのステーブルコインは資金決済法上の「仮想通貨」で...',
      date: '2018.8.20'
    }
  ] as {
    name: string;
    url: string;
    icon: string;
    image: string;
    title: string;
    date: string;
  }[];


  public translation = {
    contacts: {
      en: 'Contacts',
      ja: '問い合わせ'
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
      en: 'Getting Started',
      ja: 'いますぐつかう'
    } as any,
    getDetails: {
      en: 'more details',
      ja: '詳細'
    } as any,
    business: {
      en: 'Business',
      ja: '事業内容'
    } as any,
    recruiteInformation: {
      en: 'RecruiteInformation',
      ja: '採用情報'
    } as any,
    aboutCompany: {
      en: 'Corporate Information',
      ja: '会社概要'
    } as any,
    media: {
      en: 'List of Past Media Coverage',
      ja: 'メディア掲載実績'
    } as any
  };


  ngOnInit() { }
}

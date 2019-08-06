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
      name: 'Consulting/Lecture',
      link: '/services/consulting',
      image: 'assets/images/services/consulting.png',
      copy: {
        en: 'Consulting/Lecture',
        ja: 'コンサルティング/講師'
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

  public members = [
    {
      name: {
        en: 'Yu Kimura',
        ja: '木村 優'
      } as any,
      position: 'CEO, CTO',
      image: 'https://pbs.twimg.com/profile_images/1059679360070836224/uNbHbPfg_400x400.jpg',
      description: {
        en: '',
        ja: '京都大学経済学部、京都大学経営管理大学院。15歳からCによるプログラミングを始め、C#を経てTypeScript,AngularやGoに至る。Ticket Peer to Peerの考案者。日本でCosmos SDK製チェーンを最初に作り始めた人。経済学の理論であるFTPLとMMTを統合したMTPLを提唱。'
      } as any,
      twitter: 'https://twitter.com/YuKimura45z',
      facebook: '',
      website: 'https://yu-kimura.jp'
    },
    {
      name: {
        en: 'Takeru Shimojima',
        ja: '下島 健'
      } as any,
      position: 'COO, CFO',
      image: 'https://pbs.twimg.com/profile_images/1142824894830239751/TN4D_5lg_400x400.jpg',
      description: {
        en: '',
        ja: 'コンサルティングを経験。'
      } as any,
      twitter: 'https://twitter.com/thetalcnem',
      facebook: '',
      website: ''
    },
    {
      name: {
        en: 'Yugo Maki',
        ja: '槇 悠悟'
      } as any,
      position: 'Engineer',
      image: 'https://pbs.twimg.com/profile_images/1069949976132767744/iAhB6l0a_400x400.jpg',
      description: {
        en: '',
        ja: 'フリーランスエンジニアを経てジョイン。'
      } as any,
      twitter: 'https://twitter.com/yutaro_elk',
      facebook: '',
      website: ''
    },
    {
      name: {
        en: 'Hiroaki Joya',
        ja: '城谷 弘明'
      } as any,
      position: 'Engineer',
      image: 'https://pbs.twimg.com/profile_images/1126783220438036480/UdNrHbgF_400x400.jpg',
      description: {
        en: '',
        ja: 'SI、外資SIを経てジョイン。'
      } as any,
      twitter: 'https://twitter.com/IYRKcryptoJ',
      facebook: '',
      website: ''
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
    gettingStarted: {
      en: 'Getting started',
      ja: 'いますぐつかう'
    } as any,
    members: {
      en: 'Members',
      ja: 'メンバー'
    } as any,
    partners: {
      en: 'Partners',
      ja: 'パートナー'
    } as any
  };


  ngOnInit() { }
}

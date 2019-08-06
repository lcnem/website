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
      name: 'Yu Kimura',
      position: 'CEO, CTO',
      image: 'https://pbs.twimg.com/profile_images/1059679360070836224/uNbHbPfg_400x400.jpg',
      description: {
        en: 'Faculty of Economics, Kyoto University and Graduate School of Business Administration, Kyoto University. At the age of 15, started programming in C, then C #, then TypeScript, Angular, and Go. The inventor of Ticket Peer to Peer. The first person to start building Cosmos SDK chains in Japan. Proposer of MTPL which integrates FTPL and MMT which are the theory of economics.',
        ja: '京都大学経済学部、京都大学経営管理大学院。15歳からCによるプログラミングを始め、C#を経てTypeScript,AngularやGoに至る。Ticket Peer to Peerの考案者。日本でCosmos SDK製チェーンを最初に作り始めた人。経済学の理論であるFTPLとMMTを統合したMTPLを提唱。'
      } as any,
      twitter: 'https://twitter.com/YuKimura45z',
      facebook: 'https://facebook.com/YuKimura45z',
      website: 'https://yu-kimura.jp'
    },
    {
      name: 'Takeru Shimojima',
      position: 'COO, CFO',
      image: 'https://pbs.twimg.com/profile_images/1142824894830239751/TN4D_5lg_400x400.jpg',
      description: {
        en: 'He graduated from the Department of Language and Culture, Tokyo University of Foreign Studies. Having experience living abroad, he has knowledge in languages and international relations. In March 2018, he established LCNEM Co., Ltd. with CEO Kimura. As a management and strategy consultant, he also provides solutions to top management.',
        ja: '東京外国語大学言語文化学部卒業。 海外在住経験を経て、語学と国際関係学に知見を有す。 2018年3月に株式会社LCNEMをCEO木村と共同起業する。 また、経営・戦略コンサルタントとしても、トップ企業の経営陣にソリューションを提供している。'
      } as any,
      twitter: 'https://twitter.com/thetalcnem',
      facebook: '',
      website: ''
    },
    {
      name: 'Yutaro',
      position: 'Engineer',
      image: 'https://pbs.twimg.com/profile_images/1069949976132767744/iAhB6l0a_400x400.jpg',
      description: {
        en: 'Joined after working as a freelance engineer. I am mainly in charge of the front end. I like developing with the NEM blockchain.',
        ja: 'フリーランスエンジニアを経てジョイン。主にフロントエンドを担当。NEMブロックチェーンで開発するのが好き。'
      } as any,
      twitter: 'https://twitter.com/yutaro_elk',
      facebook: '',
      website: ''
    },
    {
      name: 'Hiroaki Joya',
      position: 'Engineer',
      image: 'https://pbs.twimg.com/profile_images/1126783220438036480/UdNrHbgF_400x400.jpg',
      description: {
        en: 'He graduated from the Business Administration Department, Faculty of Business Administration, Meiji University. He has knowledge of leadership theory and marketing theory. Experience in the maintenance and operation of aviation systems at foreign SI companies. When he was a university student, he made sales materials at an IT consulting company. We are working hard to achieve growth hacking not only in software engineering but also in marketing.',
        ja: '明治大学経営学部経営学科卒業。リーダーシップ論・マーケティング論に知見を有する。外資系SI企業にて航空系システムの保守・運用を経験。大学時代にはITコンサル系企業にて営業資料の作成を行なっていた。ソフトウェアエンジニアリングのみならず、マーケティング含めたグロースハックを実現すべく奮闘中。'
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

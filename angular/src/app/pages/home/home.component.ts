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
      en: 'Using blockchains to optimize the cost of the world',
      ja: 'ブロックチェーンで世の中のコストを最適化'
    } as any,
    topBody: {
      en: `Analog and legacy systems are being culled out, and digitization is proceeding in the world.
However intensive costs accompanying digitalization are also occurring in the world at the same time.
For example, banks spend a lot of money for security.
Also, at events such as live where we want to prevent resale, we take a costly method, such as checking for identification and face photographs.
The blockchains have the power to eliminate these costs.
In order to optimize the world's inefficient costs with the blockchains, LCNEM offers various products.`,
      ja: `アナログ、レガシーなシステムは淘汰されつつあり、世の中ではデジタル化が進行していますが、デジタル化に伴う集中的なコストも同時に世の中に大量発生しています。
例えば、銀行はセキュリティのために多額の出費をしています。
また、転売を防ぎたいライブなどのイベントにおいては、身分証明書や顔写真を確認するなど、コストのかかる手法をとっています。
これらコストをなくす力がブロックチェーンにはあります。
世の中の非効率なコストをブロックチェーンで最適化するため、LCNEMは様々なプロダクトを提供します。`
    } as any,
    cheque: {
      en: 'LCNEM Cheque',
      ja: 'LCNEM Cheque'
    } as any,
    chequeTop: {
      en: 'Legal currency pegged assets on blockchains with transparency.',
      ja: 'ブロックチェーン上の電子マネー'
    } as any,
    chequeBody: {
      en: `LCNEM(Legal Currency New Economy Movement) issues legal currency pegged assets on the public blockchains and serves as a \"Stable coin\".
You will be able to transfer the value of legal currency without credit inquiry, large investment in security, high fee, etc, which were previously indispensable.`,
      ja: `LCNEMはパブリックブロックチェーン上に電子マネーを発行します。ブロックチェーン上のいわゆるステーブルコインとして機能します。
安価な手数料ながらセキュアで、そしてパーミッションレスで開かれた電子マネーシステムを目指しています。
現在はNEMブロックチェーンに対応しており、今後はCosmosネットワークに対応予定です。`
    } as any,
    faq: {
      en: 'FAQ',
      ja: 'よくある質問はこちら'
    } as any,
    lcnemint: {
      en: "lcnemint",
      ja: "lcnemint"
    } as any,
    lcnemintTop: {
      en: "Original blockchain for making Cheque support Cosmos network",
      ja: "ChequeのCosmosネットワーク流通のための独自ブロックチェーン"
    } as any,
    lcnemintBody: {
      en: "",
      ja: "lcnemintは、LCNEM ChequeをCosmosネットワークに流通させるための独自ブロックチェーンです。法定通貨にペグされたアセットをCosmosネットワーク内で使用することができます。"
    } as any,
    lcnemWallet: {
      en: 'LCNEM Wallet',
      ja: 'LCNEM Wallet'
    } as any,
    lcnemWalletTop: {
      en: 'Wallet app compatible with LCNEM',
      ja: 'LCNEMに対応したウォレットアプリ'
    } as any,
    lcnemWalletBody: {
      en: `Purchase of LCNEM pegged assets from here. It is an application that you can use from your browser using Google Account login.
Currently it is compatible with NEM blockchains and will be compatible with lcnemint and Cosmos network in the future.`,
      ja: `LCNEM Chequeの購入はこちらから。ブラウザから使えるアプリです。
現在はNEMブロックチェーンに対応しています。クラウド上での秘密鍵の保管にも対応している簡単で便利なブロックチェーンウォレットです。`
    } as any,
    ticketP2p: {
      en: 'Ticket Peer to Peer',
      ja: 'ちけっとピアツーピア'
    } as any,
    ticketP2pTop: {
      en: 'Prevent illegal resale using blockchains',
      ja: 'ブロックチェーンでチケット転売防止'
    } as any,
    ticketP2pBody: {
      en: `It is the system of preventing resale of tickets/game accounts using blockchains`,
      ja: `ブロックチェーンをつかったチケット転売防止/課金ゲームアカウント転売防止システムです。`
    } as any,
    consulting: {
      en: "Consulting",
      ja: "コンサルティング"
    } as any,
    consultingTop: {
      en: "Consulting blockchain technologies",
      ja: "ブロックチェーン技術のコンサルティング"
    } as any,
    consultingBody: {
      en: "",
      ja: ""
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

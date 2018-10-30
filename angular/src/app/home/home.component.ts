import { Component, OnInit } from "@angular/core";
import { GlobalDataService } from "../services/global-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public media = [
    {
      name: "TechCrunch",
      url: "https://jp.techcrunch.com/2018/09/20/lcnem-ticketp2p/",
      icon: "assets/media/tech-crunch.svg",
      image: "assets/images/lcnem.svg",
      title: "ブロックチェーンでチケット転売防止、京大発スタートアップLCNEM...",
      date: "2018.9.20"
    },
    {
      name: "CoinTelegraph",
      url:
        "https://jp.cointelegraph.com/news/lcnem-sells-nem-based-stable-coins",
      icon: "assets/media/cointelegraph.svg",
      image: "assets/media/coinbase.png",
      title: "ネムウォレットのLCNEM、モザイクで発行した前払式支払手段を販売",
      date: "2018.6.25"
    }
  ] as {
    name: string;
    url: string;
    icon: string;
    image: string;
    title: string;
    date: string;
  }[];

  constructor(public global: GlobalDataService) {}

  ngOnInit() {}

  public translation = {
    contacts: {
      en: "Contacts",
      ja: "問い合わせ"
    } as any,
    top: {
      en: "ブロックチェーンで世の中のコストを最適化",
      ja: "ブロックチェーンで世の中のコストを最適化"
    } as any,
    topBody: {
      en: `アナログ、レガシーなシステムは淘汰されつつあり、世の中ではデジタル化が進行していますが、デジタル化に伴う集中的なコストも同時に世の中に大量発生しています。
            例えば、銀行はセキュリティのために多額の出費をしています。
            また、転売を防ぎたいライブなどのイベントにおいては、身分証明書や顔写真を確認するなど、コストのかかる手法をとっています。
            これらコストをなくす力がブロックチェーンにはあります。
            世の中の非効率なコストをブロックチェーンで最適化するため、LCNEMは様々なプロダクトを提供します。`,
      ja: `アナログ、レガシーなシステムは淘汰されつつあり、世の中ではデジタル化が進行していますが、デジタル化に伴う集中的なコストも同時に世の中に大量発生しています。
            例えば、銀行はセキュリティのために多額の出費をしています。
            また、転売を防ぎたいライブなどのイベントにおいては、身分証明書や顔写真を確認するなど、コストのかかる手法をとっています。
            これらコストをなくす力がブロックチェーンにはあります。
            世の中の非効率なコストをブロックチェーンで最適化するため、LCNEMは様々なプロダクトを提供します。`
    } as any,
    lcnemDevelopment: {
      en: "Development of LCNEM",
      ja: "LCNEMの開発"
    } as any,
    lcnemTop: {
      en: "Legal currency pegged assets on blockchains with transparency.",
      ja: "ブロックチェーン上の法定通貨移転システム。"
    } as any,
    lcnemBody: {
      en: `LCNEM(Legal Currency New Economy Movement) issues legal currency pegged assets on the public blockchains and serves as a \"Stable coin\".
            You will be able to transfer the value of legal currency without credit inquiry, large investment in security, high fee, etc, which were previously indispensable.`,
      ja: `LCNEMは(Legal Currency New Economy Movement)、パブリックブロックチェーン上に法定通貨ペグアセットを発行し、いわゆるステーブルコインとしての役目を果たします。
            信用審査、セキュリティへの多くの投資、高い手数料といった従来必須であったものなしに、簡単に法定通貨の価値移転を利用することができるようになります。`
    } as any,
    faq: {
      en: "FAQ",
      ja: "FAQ"
    } as any,
    lcnemWalletDevelopment: {
      en: "Development of LCNEM Wallet",
      ja: "LCNEM Walletの開発"
    } as any,
    lcnemWalletTop: {
      en: "LCNEMに対応したウォレットアプリ",
      ja: "LCNEMに対応したウォレットアプリ"
    } as any,
    lcnemWalletBody: {
      en: `Purchase of LCNEM pegged assets from here. It is an application that you can use from your browser using Google Account login.
            Currently it is compatible with NEM blockchains and will be compatible with lcnemint and Cosmos network in the future.`,
      ja: `LCNEMペグアセットの購入はこちらから。ブラウザから使えるアプリです。
            現在はNEMブロックチェーンに対応しており、今後はCosmosネットワークに対応予定です。クラウド上での秘密鍵の保管にも対応しており簡単・便利にWalletを利用することができます。`
    } as any,
    ticketP2pDevelopment: {
      en: "Development of Ticket Peer to Peer",
      ja: "ちけっとピアツーピアの開発"
    } as any,
    ticketP2pTop: {
      en: "",
      ja: "ブロックチェーンでチケット転売防止。"
    } as any,
    ticketP2pBody: {
      en: `It is the "ticket selling system" using blockchains with which you can take measures to resell. And you can make it embedded in the site with your favorite design.`,
      ja: `転売対策が容易かつ、好きなデザインでサイトに埋め込むことができるブロックチェーンを使ったチケット販売システムです。ブラウザ上でイベントを作成しAPIを介してチケットを発行することが可能です。`
    } as any,
    readMore: {
      en: "Read more",
      ja: "詳しく見る"
    } as any,
    gettingStarted: {
      en: "Getting Started",
      ja: "いますぐつかう"
    } as any,
    business: {
      en: "Business",
      ja: "事業内容"
    } as any,
    lcnemWallet: {
      en: "LCNEM Wallet",
      ja: "LCNEM Wallet"
    } as any,
    ticketP2p: {
      en: "Ticket Peer to Peer",
      ja: "ちけっとピアツーピア"
    } as any,
    recruiteInformation: {
      en: "RecruiteInformation",
      ja: "採用情報"
    } as any,
    aboutCompany: {
      en: "Corporate Information",
      ja: "会社概要"
    } as any
  };
}

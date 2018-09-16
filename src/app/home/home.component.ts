import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    public global: GlobalDataService
  ) {

  }

  ngOnInit() {
  }

  public translation = {
    contacts: {
      en: "Contacts",
      ja: "問い合わせ"
    },
    contactsForm: {
      en: "https://docs.google.com/forms/d/e/1FAIpQLScrINdlZRveAP-PIGcoF1Vvhm2bQ8CW24s_YtcDNigvaqwl-A/viewform?usp=sf_link",
      ja: "https://docs.google.com/forms/d/e/1FAIpQLSd-BEM6KW-rwJaGblfWHMxo5zXPgViCq-442UB8nqkV7f1rTw/viewform?usp=sf_link"
    },
    risklessPeggedAssets: {
      en: "Legal currency pegged assets on blockchains with transparency.",
      ja: "透明性ある、ブロックチェーン上の法定通貨ペグアセット。"
    },
    risklessPeggedAssetsBody: {
      en: `LCNEMは、パブリックブロックチェーン上に法定通貨ペグアセットを発行し、いわゆるステーブルコインとしての役目を果たします。
信用審査、セキュリティへの多くの投資、高い手数料といった従来必須であったものなしに、簡単に法定通貨の価値移転を利用することができるようになります。`,
      ja: `LCNEMは、パブリックブロックチェーン上に法定通貨ペグアセットを発行し、いわゆるステーブルコインとしての役目を果たします。
信用審査、セキュリティへの多くの投資、高い手数料といった従来必須であったものなしに、簡単に法定通貨の価値移転を利用することができるようになります。`
    },
    roadmap: {
      en: "Roadmap",
      ja: "ロードマップ"
    },
    whyRiskless: {
      en: "透明性ある理由",
      ja: "透明性ある理由"
    },
    whyRisklessBody: {
      en: `日本国の資金決済に関する法律では、前払式支払手段発行業、資金移動業ともに供託義務が課せられているため、従来のブロックチェーン上のペグアセットにしばしば起こる「裏付けなき発行への疑念」がありません。`,
      ja: `日本国の資金決済に関する法律では、前払式支払手段発行業、資金移動業ともに供託義務が課せられているため、従来のブロックチェーン上のペグアセットにしばしば起こる「裏付けなき発行への疑念」がありません。`
    },
    faq: {
      en: "FAQ",
      ja: "FAQ"
    },
    lcnemintBody: {
      en: `lcnemint`,
      ja: `lcnemintは、LCNEMペグアセットのやり取りに特化した非常に高速なブロックチェーンです。LCNEMペグアセットがCosmosネットワークに流通する起点でもあります。`
    },
    paymentRequestApiBody: {
      en: ``,
      ja: `PaymentRequestAPIは、ブラウザ上で支払い手続きを行うことができるようになる、新しいウェブにおける規格です。LCNEMペグアセットを、クレジットカードと同じようなUIで送信できるようになるため、ウェブサイトやアプリケーションへの統合が容易になります。`
    },
    lcnemWalletBody: {
      en: `LCNEMペグアセットの購入はこちらから。Googleアカウントログインを使い、ブラウザから使えるアプリです。
現在はNEMブロックチェーンに対応しており、今後はTendetmintコンセンサスを利用した独自ブロックチェーンlcnemint、そしてCosmosネットワークに対応予定です。`,
      ja: `LCNEMペグアセットの購入はこちらから。Googleアカウントログインを使い、ブラウザから使えるアプリです。
現在はNEMブロックチェーンに対応しており、今後はTendetmintコンセンサスを利用した独自ブロックチェーンlcnemint、そしてCosmosネットワークに対応予定です。`
    },
    readMore: {
      en: "Read more",
      ja: "詳しく"
    },
    gettingStarted: {
      en: "Getting Started",
      ja: "いますぐつかう"
    }
  } as { [key: string]: { [key: string]: string } };
}

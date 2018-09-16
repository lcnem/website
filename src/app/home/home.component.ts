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
      ja: `PaymentRequestAPIは、ブラウザ上で支払い手続きを行うことができるようになる、新しい規格です。LCNEMペグアセットを、クレジットカードと同じようなUIで送信できるようになるため、ウェブサイトやアプリケーションへの統合が容易になります。`
    },
    lcnemWalletBody: {
      en: `LCNEMペグアセットの購入はこちらから。Googleアカウントログインを使い、ブラウザから使えるアプリです。
現在はNEMブロックチェーンに対応しており、今後はTcnemint、そしてCosmosネットワークに対応予定です。`,
      ja: `LCNEMペグアセットの購入はこちらから。Googleアカウントログインを使い、ブラウザから使えるアプリです。
現在はNEMブロックチェーンに対応しており、今後はlcnemint、そしてCosmosネットワークに対応予定です。`
    },
    readMore: {
      en: "Read more",
      ja: "詳しく"
    },
    gettingStarted: {
      en: "Getting Started",
      ja: "いますぐつかう"
    },
    roadmap: {
      en: "Roadmap",
      ja: "ロードマップ"
    },
    compliance: {
      en: "Compliance",
      ja: "コンプライアンス"
    },
    noActionLetter: {
      en: "Preliminary confirmation procedure to the Financial Services Agency",
      ja: "金融庁への法令適用事前確認手続き"
    },
    issueAsPrepaid: {
      en: "Started issuing as a self-contained prepaid payment method",
      ja: "自家型前払式支払手段として発行開始"
    },
    issueAsPrepaidBody: {
      en: `We will start issuing as a self-contained prepaid payment method. In \"self-contained prepaid payment method\", the cash is restricted by law and it has been only in exchange with Amazon gift certificates.`,
      ja: `自家型前払式支払手段として、発行を開始します。「自家型前払式支払手段」では、法律により換金が規制されており、アマゾンギフト券との交換にとどまっています。`
    },
    registerAsPrepaidWithSettlement: {
      en: "Prepaid payment method with settlement system for third party stores Registration",
      ja: "第三者型前払式支払手段発行業登録"
    },
    registerAsPrepaidWithSettlementBody: {
      en: `By registering the issuing as third party type prepaid payment method, it is possible to respond to cash to the store with the contract.
Because the government ordinance that the net asset of 100 million yen or more is required for registration is specified, we will need fund raising.`,
      ja: `第三者型前払式支払手段発行業登録をすることにより、契約を結んだ店舗への換金対応が可能になります。
登録には、純資産1億円以上が必要であるとの政令が指定されているため、資金調達を行います。`
    },
    registerAsRemittance: {
      en: "Funds Transfer business Registration",
      ja: "資金移動業登録"
    },
    registerAsRemittanceBody: {
      en: `Prepaid payment method with settlement system for third party stores Registration creates a practical system, but in order to pursue even more convenience, we are looking at registration of funds transfer business.
Refund will be possible by fund transfer business registration.`,
      ja: `第三者型前払式支払手段発行業登録により実用的なシステムが完成しますが、さらなる利便性の追求のため資金移動業登録を見据えています。
資金移動業登録により、払戻しが可能になります。`
    },
    development: {
      en: "Develop",
      ja: "開発"
    },
    developWallet: {
      en: "Develop wallet",
      ja: "ウォレットの開発"
    },
    developLcnemint: {
      en: "Develop lcnemint",
      ja: "lcnemintの開発"
    },
    developPaymentRequestApi: {
      en: "Develop Payment Request API",
      ja: "Payment Request APIの開発"
    }
  } as { [key: string]: { [key: string]: string } };
}

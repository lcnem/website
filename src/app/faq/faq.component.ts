import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(
    public global: GlobalDataService
  ) { }

  ngOnInit() {
  }

  public translation = {
    whatIsTendermint: {
      en: "What is Tendermint?",
      ja: "Tendermintとはなんですか？"
    },
    whatIsTendermintA: {
      en: `Tendermintは、ブロックの分岐が発生しない(即時ファイナリティ)性質をもつ、ブロックチェーンのコンセンサスエンジンです。
Tendermintを使って独自のブロックチェーンを作ることができるため、LCNEM法定通貨ペグアセットの送信に特化したブロックチェーンlcnemintを開発します。`,
      ja: `Tendermintは、ブロックの分岐が発生しない(即時ファイナリティ)性質をもつ、ブロックチェーンのコンセンサスエンジンです。
Tendermintを使って独自のブロックチェーンを作ることができるため、LCNEM法定通貨ペグアセットの送信に特化したブロックチェーンlcnemintを開発します。`
    },
    whatIsCosmos: {
      en: "What is Cosmos?",
      ja: "Cosmosとはなんですか？"
    },
    whatIsCosmosA: {
      en: `Tendermintの即時ファイナリティ性を利用し、IBCと呼ばれるブロックチェーン間で相互に接続するための規格を使って、ブロックチェーン間で相互運用性をもったネットワークがCosmosです。
lcnemintがCosmosネットワークに対応するということは、Cosmosネットワーク上のブロックチェーン(例:Ethermint)でもLCNEM法定通貨ペグアセットが利用できることを意味します。`,
      ja: `Tendermintの即時ファイナリティ性を利用し、IBCと呼ばれるブロックチェーン間で相互に接続するための規格を使って、ブロックチェーン間で相互運用性をもったネットワークがCosmosです。
lcnemintがCosmosネットワークに対応するということは、Cosmosネットワーク上のブロックチェーン(例:Ethermint)でもLCNEM法定通貨ペグアセットが利用できることを意味します。`
    },
    whyNem: {
      en: "Why use nem?",
      ja: "なぜnemを使うのですか？"
    },
    whyNemA: {
      en: "What is Credit review?",
      ja: `nemはマルチシグの運用が簡単であり、セキュアであることからまずnemを採用しました。
また、nemはAPIベースのブロックチェーンであり、アプリケーションの開発が容易です。この容易さはCosmosネットワークに対応するだけではカバーできないと考えられます。`
    },
    contacts: {
      en: "Contacts",
      ja: "問い合わせ"
    },
    contactsForm: {
      en: "https://docs.google.com/forms/d/e/1FAIpQLScrINdlZRveAP-PIGcoF1Vvhm2bQ8CW24s_YtcDNigvaqwl-A/viewform?usp=sf_link",
      ja: "https://docs.google.com/forms/d/e/1FAIpQLSd-BEM6KW-rwJaGblfWHMxo5zXPgViCq-442UB8nqkV7f1rTw/viewform?usp=sf_link"
    }
  } as { [key: string]: { [key: string]: string } };
}

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
    whatIsCosmos: {
      en: "What is Cosmos?",
      ja: "Cosmosとはなんですか？"
    },
    whatIsCosmosA: {
      en: `IBCと呼ばれるブロックチェーン間で相互に接続するための規格を使って、ブロックチェーン間で相互運用性をもったネットワークがCosmosです。
EthermintをはじめとするCosmosネットワーク上の全てのブロックチェーンでLCNEM法定通貨ペグアセットが利用できることを意味します。`,
      ja: `IBCと呼ばれるブロックチェーン間で相互に接続するための規格を使って、ブロックチェーン間で相互運用性をもったネットワークがCosmosです。
EthermintをはじめとするCosmosネットワーク上の全てのブロックチェーンでLCNEM法定通貨ペグアセットが利用できることを意味します。`
    },
    whyNem: {
      en: "Why use nem?",
      ja: "なぜnemを使うのですか？"
    },
    whyNemA: {
      en: `nemはマルチシグの運用が簡単であり、セキュアであることからまずnemを採用しました。
また、nemはAPIベースのブロックチェーンであり、アプリケーションの開発が容易です。この容易さはCosmosネットワークに対応するだけではカバーできないと考えられます。`,
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
  };
}

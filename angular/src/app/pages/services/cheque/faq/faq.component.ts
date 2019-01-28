import { Component, OnInit } from "@angular/core";
import { LanguageService } from '../../../../services/language.service';

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"]
})
export class FaqComponent implements OnInit {
  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {}

  public faqContent = [
    {
      question: {
        en: "Why use nem?",
        ja: "なぜnemを使うのですか？"
      } as any,
      answer: {
        en: `nemはマルチシグの運用が簡単であり、セキュアであることからまずnemを採用しました。
            また、nemはAPIベースのブロックチェーンであり、アプリケーションの開発が容易です。この容易さはCosmosネットワークに対応するだけではカバーできないと考えられます。`,
        ja: `nemはマルチシグの運用が簡単であり、セキュアであることからまずnemを採用しました。
            また、nemはAPIベースのブロックチェーンであり、アプリケーションの開発が容易です。この容易さはCosmosネットワークに対応するだけではカバーできないと考えられます。`
      } as any,
      imgURL: "assets/images/lcnem-nem.svg"
    },
    {
      question: {
        en: "What is Cosmos?",
        ja: "Cosmosとはなんですか？"
      } as any,
      answer: {
        en: `IBCと呼ばれるブロックチェーン間で相互に接続するための通信規格を使って、ブロックチェーン間で相互運用性をもたせたネットワークがCosmosです。
Cosmosネットワーク上の全てのブロックチェーンでLCNEMのいわゆるステーブルコインが利用できることを意味します。`,
        ja: `IBCと呼ばれるブロックチェーン間で相互に接続するための通信規格を使って、ブロックチェーン間で相互運用性をもたせたネットワークがCosmosです。
Cosmosネットワーク上の全てのブロックチェーンでLCNEMのいわゆるステーブルコインが利用できることを意味します。`
      } as any,
      imgURL: "assets/images/cosmos.png"
    }
  ]

  public translation = {
    contacts: {
      en: "Contacts",
      ja: "問い合わせ"
    } as any
  }
}

import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../../services/language/language.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  public faqContent = [
    {
      question: {
        en: 'Why use nem?',
        ja: 'なぜnemを使うのですか？'
      } as any,
      answer: {
        en: `We adopted nem because it is easy to operate multisig and be secure.
        And all the functionality provided by NEM is easily available by accessing the API Gateway, so it is easy to develop apps.
It seems that this ease can not be replaced simply by supporting the Cosmos network.`,
        ja: `nemはマルチシグの運用が簡単であり、セキュアであることからまずnemを採用しました。
また、nemはAPIベースのブロックチェーンであり、アプリケーションの開発が容易です。この容易さはCosmosネットワークに対応するだけではカバーできないと考えられます。`
      } as any,
      imgURL: 'assets/images/lcnem-nem.svg'
    },
    {
      question: {
        en: 'What is Cosmos?',
        ja: 'Cosmosとはなんですか？'
      } as any,
      answer: {
        en: `Cosmos is a network that provides interoperability among blockchains using communication protocol for mutual connection among blockchains called IBC.
It means that LCNEM Cheque is available in all blockchains on the Cosmos network.`,
        ja: `IBCと呼ばれるブロックチェーン間で相互に接続するための通信規格を使って、ブロックチェーン間で相互運用性をもたせたネットワークがCosmosです。
Cosmosネットワーク上の全てのブロックチェーンでLCNEMのいわゆるステーブルコインが利用できることを意味します。`
      } as any,
      imgURL: 'assets/images/cosmos.png'
    }
  ];

  public translation = {
    contacts: {
      en: 'Contacts',
      ja: '問い合わせ'
    } as any
  };

  ngOnInit() { }
}

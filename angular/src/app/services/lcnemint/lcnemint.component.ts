import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-lcnemint',
  templateUrl: './lcnemint.component.html',
  styleUrls: ['./lcnemint.component.css']
})
export class LcnemintComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public words = [
    {
      name: 'Cosmos Network',
      link: 'https://cosmos.network',
      image: 'assets/images/dlt/cosmos.svg',
      description: {
        en: ``,
        ja: `
ブロックチェーン同士で情報をやり取りする通信「IBC」をブロックチェーン「Cosmos Hub」を中心に行うことで、ブロックチェーン上の記録を別のブロックチェーンとやりとりすることができるネットワークです。
lcnemintがCosmos Networkに参加するということは、Cosmos Network上のすべてのブロックチェーンでLCNEM Cheque（ステーブルコイン）が利用可能になることを意味します。`
      } as any
    },
    {
      name: 'Tendermint',
      link: 'https://tendermint.com',
      image: 'assets/images/dlt/tendermint.svg',
      description: {
        en: ``,
        ja: `
Cosmos Networkを構成するブロックチェーンに標準的に使われる、コンセンサスアルゴリズム部分を担当するブロックチェーン基盤です。
Cosmos Hubや、lcnemintに使われています。`
      } as any
    }
  ];

  public translation = {
    top: {
      en: 'Cosmos blockchain for LCNEM Cheque',
      ja: 'LCNEM ChequeのためのCosmosネットワークのブロックチェーン'
    } as any,
    words: {
      en: 'Words',
      ja: '用語'
    } as any,
    contact: {
      en: "Contact us",
      ja: "問い合わせ"
    } as any
  }
}

import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from "../services/global-data.service";
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-lcnem-wallet',
  templateUrl: './lcnem-wallet.component.html',
  styleUrls: ['./lcnem-wallet.component.css']
})
export class LcnemWalletComponent implements OnInit {

  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() { }

  public translation = {
    byLcnemWallet: {
      en: "",
      ja: "LCNEM Walletで"
    } as any,
    managingWallet: {
      en: "",
      ja: "ウォレット管理を"
    } as any,
    withEaseMore: {
      en: "",
      ja: "もっと簡単に"
    } as any,
    withConvenienceMore: {
      en: "",
      ja: "もっと便利に"
    } as any,
    googleLogin: {
      en: "",
      ja: "Google ログイン"
    } as any,
    cloudManageSecretKey: {
      en: "",
      ja: "クラウドでの秘密鍵管理"
    } as any,
    useStableCoin: {
      en: "",
      ja: "ステーブルコインの利用"
    } as any,
    secretKey: {
      en: "",
      ja: "クラウドでの秘密鍵管理"
    } as any,
    useNow: {
      en: "Use Now",
      ja: "今すぐ使う"
    } as any,
    secretKeyBody: {
      en: "",
      ja: "Googleアカウントに紐づけてクラウド上で秘密鍵を管理することも可能です。煩わしい秘密鍵の管理から解放され簡単・便利にモバイルからで利用が可能になります。（無料プランではクラウドに保存できる秘密鍵は一つまでです。）"
    } as any,
    pricePlanIndex: {
      en: "",
      ja: "料金プラン一覧"
    } as any,
    priceColumn: {
      en: "",
      ja: "料金"
    } as any,
    planFree: {
      en: "",
      ja: "無料"
    } as any,
    priceStandard: {
      en: "",
      ja: "200円 / 月"
    } as any,
    secretKeyColumn: {
      en: "",
      ja: "クラウド秘密鍵管理"
    } as any,
    availableOnlyOne: {
      en: "",
      ja: "一つのみ"
    } as any,
    availableMulti: {
      en: "",
      ja: "複数利用可"
    } as any,
    getCommissionColumn: {
      en: "",
      ja: "手数料(XEM)取得"
    } as any,
    useAddress: {
      en: "",
      ja: "アドレス帳の利用"
    } as any,
    useAddressBody: {
      en: "",
      ja: "よく使う送信先をアドレス帳として管理することができます。これで送金のたびに相手に聞いたりQRを読み込んだり自分で管理する必要が無くなります。"
    } as any,
    useMultiWallet: {
      en: "",
      ja: "マルチウォレットの利用"
    } as any,
    useMultiWalletBody: {
      en: "",
      ja: "一つのGoogleアカウントで複数のWalletを管理することができるようになります。用途によって使いわけることもできます。現在はXEMのみの対応ですが、今後は他のブロックチェーンも対応予定です。"
    } as any,
    lcnemWalletFeatureItem: {
      en: "",
      ja: "LCNEM Walletでできること"
    } as any,
    buyStableCoin: {
      en: "",
      ja: "LCNEMのStable Coin(ステーブルコイン）の購入"
    } as any,
    buyStableCoinBody: {
      en: "",
      ja: "LCNEM Walletでは、LCNEMで開発し提供している法定通貨に価値が固定されたStable Coinを購入できます。1000円から購入でき、実際に決済に使うことのできる店舗もあります。決済方法はクレジットカードのみです。また、Stable CoinはいつでもWallet内からAmazonギフト券に交換できます。"
    },
    aboutStableCoin: {
      en: "",
      ja: "ステーブルコインとは・・・"
    } as any,
    aboutStableCoinBody: {
      en: "",
      ja: `ブロックチェーン上に流通するアセットの中で、一般的な仮想通貨とは異なり法定通貨と価格が同じになるように設計されたアセットです。LCNEMは、電子マネーと同じ仕組みで担保することによってステーブルコインを発行します。つまり、法定通貨とブロックチェーンの両方のメリットを活かした価値移転が可能となります。さらに、LCNEMの
      ステーブルコインはシステムへの組み込みが容易なNEMブロックチェーン上で動くので、簡単に独自のサービスに組み込むことも可能です。自由に、かつ簡単に導入可能な点もブロックチェーンのメリットです`
    } as any,
  };
}

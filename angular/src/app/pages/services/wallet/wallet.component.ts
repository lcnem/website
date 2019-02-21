import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  public translation = {
    byLcnemWallet: {
      en: 'With LCNEM Wallet',
      ja: 'LCNEM Walletで'
    } as any,
    managingWallet: {
      en: 'Managing Wallet',
      ja: 'ウォレット管理を'
    } as any,
    withEaseMore: {
      en: 'More Easily',
      ja: 'もっと簡単に'
    } as any,
    withConvenienceMore: {
      en: 'More Usefully',
      ja: 'もっと便利に'
    } as any,
    googleLogin: {
      en: 'Google Sign-in',
      ja: 'Google ログイン'
    } as any,
    cloudManageSecretKey: {
      en: 'Secret Key Management in the Cloud',
      ja: 'クラウドでの秘密鍵管理'
    } as any,
    useStableCoin: {
      en: 'Use of Stable Coins',
      ja: 'ステーブルコインの利用'
    } as any,
    secretKey: {
      en: 'Secret Key Management in the Cloud',
      ja: 'クラウドでの秘密鍵管理'
    } as any,
    useNow: {
      en: 'Getting started',
      ja: '今すぐ使う'
    } as any,
    secretKeyBody: {
      en: 'It is also possible to manage your private key on the cloud connected to your Google Account. You can be released from annoying management of secret key and it becomes easy to use conveniently with mobile. (In the free plan, you can save only one secret key in the cloud.)',
      ja: 'Googleアカウントに紐づけてクラウド上で秘密鍵を管理することも可能です。煩わしい秘密鍵の管理から解放され簡単・便利にモバイルからで利用が可能になります。（無料プランではクラウドに保存できる秘密鍵は一つまでです。）'
    } as any,
    pricePlanIndex: {
      en: 'Payment Plan',
      ja: '料金プラン一覧'
    } as any,
    priceColumn: {
      en: 'Price',
      ja: '料金'
    } as any,
    planFree: {
      en: 'Free',
      ja: '無料'
    } as any,
    priceStandard: {
      en: '200yen / Month',
      ja: '200円 / 月'
    } as any,
    secretKeyColumn: {
      en: 'Secret key management in the Cloud',
      ja: 'クラウド秘密鍵管理'
    } as any,
    availableOnlyOne: {
      en: 'One',
      ja: '一つのみ'
    } as any,
    availableMulti: {
      en: 'More than One',
      ja: '複数利用可'
    } as any,
    getCommissionColumn: {
      en: 'Commission (XEM) acquisition',
      ja: '手数料(XEM)取得'
    } as any,
    useAddress: {
      en: 'Use of Address Book',
      ja: 'アドレス帳の利用'
    } as any,
    useAddressBody: {
      en: 'You can manage frequently destinations as an address book. With this, you do not need to listen to the opponent or read QR or manage it yourself every time you send money.',
      ja: 'よく使う送信先をアドレス帳として管理することができます。これで送金のたびに相手に聞いたりQRを読み込んだり自分で管理する必要が無くなります。'
    } as any,
    useMultiWallet: {
      en: 'Use of Multi Wallet',
      ja: 'マルチウォレットの利用'
    } as any,
    useMultiWalletBody: {
      en: 'You will be able to manage multiple wallets with one Google Account. It can also be used depending on the use. Although it is correspondence only to NEM now, we are planning to make it available with other blockchains for the future.',
      ja: '一つのGoogleアカウントで複数のWalletを管理することができるようになります。用途によって使いわけることもできます。現在はNEMのみの対応ですが、今後は他のブロックチェーンも対応予定です。'
    } as any,
    lcnemWalletFeatureItem: {
      en: 'What you can do with LCNEM Wallet',
      ja: 'LCNEM Walletでできること'
    } as any,
    buyStableCoin: {
      en: 'Purchase LCNEM Cheque (so-called Stable Coins)',
      ja: 'LCNEMのブロックチェーン電子マネー（ステーブルコイン）の購入'
    } as any,
    buyStableCoinBody: {
      en: 'In LCNEM Wallet, you can purchase LCNEM\'s blockchains electronic money, LCNEM Cheque.',
      ja: 'LCNEM Walletでは、LCNEMのブロックチェーン電子マネー（ステーブルコイン）を購入できます。'
    } as any,
    aboutStableCoin: {
      en: 'What is stable coin?',
      ja: 'ステーブルコインとは'
    } as any,
    aboutStableCoinBody: {
      en: 'Unlike general cryptocurrency, the asset that are distributed on blockchains are designed to have the same price as the legal currency. LCNEM issues stable coins,LCNEM Cheque, by collating with the same mechanism as electronic money. This makes it possible to transfer the value by taking advantage of both legal currency and blockchains. In addition, LCNEM stable coins can run on NEM blockchains that are easy to integrate into the system, so you can easily incorporate them into your own service. And there is the advantage of the blockchains which can be freely and easily introduced.',
      ja: `ブロックチェーン上に流通するアセットの中で、一般的な仮想通貨とは異なり法定通貨と価格が同じになるように設計されたアセットです。LCNEMは、電子マネーと同じ仕組みで担保することによってステーブルコインを発行します。これにより、法定通貨とブロックチェーンの両方のメリットを活かした価値移転が可能となります。さらに、LCNEMの
ステーブルコインはシステムへの組み込みが容易なNEMブロックチェーン上で動くので、簡単に独自のサービスに組み込むことも可能です。自由に、かつ簡単に導入可能な点もブロックチェーンのメリットです。`
    } as any
  };

  ngOnInit() { }
}

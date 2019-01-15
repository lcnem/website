import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-emergency-cosign',
  templateUrl: './emergency-cosign.component.html',
  styleUrls: ['./emergency-cosign.component.css']
})
export class EmergencyCosignComponent implements OnInit {
  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    caseLostMultisig: {
      ja: "秘密鍵を無くしたその時に",
      en: ""
    } as any,
    multisig: {
      ja: "マルチシグ",
      en: ""
    } as any,
    emergencyCosign: {
      ja: "緊急時連署名",
      en: ""
    } as any,
    service: {
      ja: "サービス",
      en: ""
    } as any,
    apply: {
      ja: "お申し込みフォームはこちら",
      en: ""
    } as any,
    actingEmergencyCosignMultisig: {
      ja: "緊急時のマルチシグ代行",
      en: ""
    } as any,
    actingEmergencyCosignMultisigBody: {
      ja: `セキュリティを高めるためにマルチシグの対応は今や必須となってきています。複数回署名することで高いセキュリティを実現できますが、一方で秘密鍵を紛失（GOX)してしまい必要な署名数に達しなくなるリスクも存在します。(マルチシグの変更にもマルチシグと同数の署名が必要です。)そこで、LCNEMのアドレスをマルチシグに追加することで万が一の時に対応いたします。`,
      en: ""
    } as any,
    saftySupport: {
      ja: "安心のサポート体制",
      en: ""
    } as any,
    saftySupportBody: {
      ja: `マルチシグの設定をしたけど、どうしたらいいのかわからない。そんな人でも大丈夫です
      。マルチシグの設定から運用までサポートいたしますので、安心してご利用ください。`,
      en: ""
    } as any,
    reasonablePrice: {
      ja: "リーズナブルな価格体系",
      en: ""
    } as any,
    reasonablePriceBody: {
      ja: "ご利用いただきやすいリーズナブルな価格体系をご用意いたしました。",
      en: ""
    } as any,
    pricePlanIndex: {
      ja: "料金プラン一覧",
      en: ""
    } as any,
    monthlyPriceIndex: {
      ja: "月額",
      en: ""
    } as any,
    yearlyPriceIndex: {
      ja: "年額(一括)",
      en: ""
    } as any,
    price: {
      ja: "料金",
      en: ""
    } as any,
    monthlyPrice: {
      ja: "1,000円",
      en: ""
    } as any,
    yearlyPrice: {
      ja: "10,000円",
      en: ""
    } as any
  }

}

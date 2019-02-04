import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css']
})
export class ChequeComponent implements OnInit {
  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    abountSubsidy: {
      en: "",
      ja: "助成金について"
    } as any,
    show: {
      en: "",
      ja: "のページをご覧ください。"
    } as any,
    roadmap: {
      en: "Roadmap of LCNEM Cheque",
      ja: "LCNEM Chequeのロードマップ"
    } as any,
    noActionLetter: {
      en: "Preliminary confirmation procedure to the Financial Services Agency",
      ja: "金融庁への法令適用事前確認手続き"
    } as any,
    issueAsPrepaid: {
      en: "Started issuing as a self-contained prepaid payment method",
      ja: "自家型前払式支払手段として発行開始"
    } as any,
    issueAsPrepaidBody: {
      en: `We will start issuing as a self-contained prepaid payment method. In \"self-contained prepaid payment method\", the cash is restricted by law and it has been only in exchange with Amazon gift certificates.`,
      ja: `自家型前払式支払手段として、発行を開始します。「自家型前払式支払手段」では、法律により換金が規制されており、アマゾンギフト券との交換にとどまっています。`
    } as any,
    registerAsPrepaidWithSettlement: {
      en:
        "Prepaid payment method with settlement system for third party stores Registration",
      ja: "第三者型前払式支払手段発行業登録"
    } as any,
    registerAsPrepaidWithSettlementBody: {
      en: `By registering the issuing as third party type prepaid payment method, it is possible to respond to cash to the store with the contract.
Because the government ordinance that the net asset of 100 million yen or more is required for registration is specified, we will need fund raising.`,
      ja: `第三者型前払式支払手段発行業登録をすることにより、契約を結んだ店舗への換金対応が可能になります。
登録には、純資産1億円以上が必要であるとの政令が指定されているため、資金調達を行います。`
    } as any
  }
}

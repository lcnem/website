import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {

  constructor(
    public global: GlobalDataService
  ) { }

  ngOnInit() {
  }
  public translation = {
    developWallet: {
      en: "Develop a wallet application",
      ja: "ウォレットアプリの開発"
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
    }
  } as { [key: string]: { [key: string]: string } };
}

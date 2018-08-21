import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        public global: GlobalDataService
    ) {
        
    }

    ngOnInit() {
    }

    public translation = {
        contacts: {
            en: "Contacts",
            ja: "問い合わせ"
        },
        contactsForm: {
            en: "https://docs.google.com/forms/d/e/1FAIpQLScrINdlZRveAP-PIGcoF1Vvhm2bQ8CW24s_YtcDNigvaqwl-A/viewform?usp=sf_link",
            ja: "https://docs.google.com/forms/d/e/1FAIpQLSd-BEM6KW-rwJaGblfWHMxo5zXPgViCq-442UB8nqkV7f1rTw/viewform?usp=sf_link"
        },
        beyondDigitalCurrencies: {
            en: "Beyond Digital Currencies.",
            ja: "デジタル通貨のその先へ。"
        },
        underRegulations: {
            en: "Remittance of legal currencies on blockchain",
            ja: "ブロックチェーンを使った法定通貨の送金"
        },
        whatIs: {
            en: `The  cryptocurrency in which the transaction is recorded on the block chain is much cheaper than the conventional remittance system, but the use causes risk of market fluctuations.
LCNEM issues electronic money in a legal currency that is not a cryptocurrency on the block chain and records transactions.
As assets to be secured are deposited to the government by the law of Japan, there is no worry about issuance without support.
LCNEM uses NEM for the blockchain.`,
            ja: `法定通貨の裏付けがあるトークンをブロックチェーン上に発行し、取引を記録します。
担保となる資産は日本国の法律により政府に供託するため、裏付けなき発行の心配がありません。
ブロックチェーンにはNEMを使います。`
        },
        lcnemWallet: {
            en: `LCNEM wallet in the NEM blockchain, that you can log-in with your Google Account.
LCNEM Wallet connects the Google Account with the private key, so it is possible to trade on the NEM block chain is without managing secret key which was essential for the conventional wallet.`,
            ja: `GoogleアカウントでログインできるNEMブロックチェーンのウォレットです。
資産の保管には秘密鍵をセルフサービスで管理するウォレットが適していますが、利便性の追求のため、Googleアカウントログインだけで使える仕様にしています。`
        },
        gettingStarted: {
            en: "Getting Started",
            ja: "いますぐつかう"
        },
        language: {
            en: "Language",
            ja: "言語"
        },
        developWallet: {
            en: "Develop a wallet application",
            ja: "ウォレットアプリの開発"
        },
        noActionLetter: {
            en: "",
            ja: "金融庁への法令適用事前確認手続き"
        },
        issueAsPrepaid: {
            en: "",
            ja: "自家型前払式支払手として発行開始"
        },
        issueAsPrepaidTooltip: {
            en: "",
            ja: `自家型前払式支払手段として、発行を開始します。「自家型前払式支払手段」では、法律により換金が規制されており、アマゾンギフト券との交換にとどまっています。`
        },
        registerAsPrepaidWithSettlement: {
            en: "",
            ja: "第三者型前払式支払手段発行業者登録"
        },
        registerAsPrepaidWithSettlementTooltip: {
            en: "",
            ja: `第三者型前払式支払手段発行業者登録をすることにより、契約を結んだ店舗への換金対応が可能になります。
登録には、純資産1億円以上が必要であるとの政令が指定されているため、資金調達を行います。`
        },
        registerAsRemittance: {
            en: "",
            ja: "資金移動業登録"
        },
        registerAsRemittanceTooltip: {
            en: "",
            ja: `第三者型前払式支払手段発行業者登録により、実用的なシステムが完成しますが、さらなる利便性の追求のため、資金移動業登録を見据えています。
資金移動業登録により、払戻しが可能になります。`
        }
    } as {[key: string]: {[key: string]: string}};
}

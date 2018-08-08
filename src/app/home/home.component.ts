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
            en: "Electronic money on blockchain under regulations",
            ja: "法で守られたブロックチェーン上の電子マネー"
        },
        whatIs: {
            en: `The  cryptocurrency in which the transaction is recorded on the block chain is much cheaper than the conventional remittance system, but the use causes risk of market fluctuations.
LCNEM issues electronic money in a legal currency that is not a cryptocurrency on the block chain and records transactions.
As assets to be secured are deposited to the government by the law of Japan, there is no worry about issuance without support.
LCNEM uses NEM for the blockchain.`,
            ja: `ブロックチェーンに取引が記録される仮想通貨は、従来の送金システムよりも手数料が極めて安い一方、使用には相場変動リスクが伴います。
LCNEMは、仮想通貨ではない法定通貨の電子マネーをブロックチェーン上に発行し、取引を記録します。
担保となる資産は日本国の法律により政府に供託するため、裏付けなき発行の心配がありません。
ブロックチェーンにはNEMを使います。`
        },
        friendlyEconomy: {
            en: `It is suitable for remittance and settlement with a cheaper commission than conventional systems.
In addition, it is suitable for gifts, chips, support and so on.`,
            ja: `従来のシステムよりも極めて安い手数料により、送金や決済に適しています。
それに加え、プレゼントやチップ、サポートなどにも適しています。`
        },
        lcnemWallet: {
            en: `LCNEM wallet in the NEM blockchain, that you can log-in with your Google Account.
LCNEM Wallet connects the Google Account with the private key, so it is possible to trade on the NEM block chain is without managing secret key which was essential for the conventional wallet.`,
            ja: `GoogleアカウントでログインできるNEMブロックチェーンのウォレットです。
Googleアカウントと秘密鍵を結びつけるため、従来のウォレットに必須であった秘密鍵管理なしにNEMブロックチェーン上の取引が可能です。`
        },
        gettingStarted: {
            en: "Getting Started",
            ja: "いますぐつかう"
        },
        language: {
            en: "Language",
            ja: "言語"
        }
    } as {[key: string]: {[key: string]: string}};
}

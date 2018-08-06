import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';
import { MatSidenav } from '../../../node_modules/@angular/material';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild("sidenav")
    public sidenav?: MatSidenav;

    watcher?: Subscription;

    constructor(
        public global: GlobalDataService,
        private media: ObservableMedia
    ) {
        
    }

    ngOnInit() {
        this.watcher = this.media.subscribe((change: MediaChange) => {
            if(!this.sidenav) {
                return;
            }
            if (change.mqAlias == 'xs') {
                this.sidenav.mode = "over";
            } else {
                this.sidenav.mode = "side";
                this.sidenav.opened = true;
            }
        });
    }

    ngOnDestroy() {
        this.watcher!.unsubscribe();
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
            en: "",
            ja: "法で守られたブロックチェーン上の電子マネー"
        },
        whatIs: {
            en: ``,
            ja: `ブロックチェーンに取引が記録される仮想通貨は、従来の送金システムよりも手数料が極めて安い一方、使用には相場変動リスクが伴います。
<br /> LCNEMは、仮想通貨ではない法定通貨の電子マネーをブロックチェーン上に発行し、取引を記録します。
<br /> 担保となる資産は日本国の法律により政府に供託するため、裏付けなき発行の心配がありません。
<br /> ブロックチェーンにはNEMを使います。`
        },
        friendlyEconomy: {
            en: ``,
            ja: `従来のシステムよりも極めて安い手数料により、送金や決済に適しています。
<br /> それだけではなく、プレゼントやチップ、サポートなどにも適しています。`
        },
        lcnemWallet: {
            en: ``,
            ja: `GoogleアカウントでログインできるNEMブロックチェーンのウォレットです。
<br /> Googleアカウントと秘密鍵を結びつけるため、従来のウォレットに必須であった秘密鍵管理なしにNEMブロックチェーン上の取引が可能です。`
        },
        gettingStarted: {
            en: "Getting Started",
            ja: "いますぐつかう"
        },
        language: {
            en: "Language",
            ja: "言語"
        }
    };
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        public global: GlobalDataService
    ) { }

    ngOnInit() { }

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
        language: {
            en: "Language",
            ja: "言語"
        }
    };
}

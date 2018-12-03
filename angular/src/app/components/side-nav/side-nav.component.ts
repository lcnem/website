import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    contacts: {
      en: "Contacts",
      ja: "問い合わせ"
    } as any,
    lcnemWallet: {
      en: "LCNEM Wallet",
      ja: "LCNEM Wallet"
    } as any,
    ticketP2p: {
      en: "Ticket Peer to Peer",
      ja: "ちけっとピアツーピア"
    } as any,
    recruiteInformation: {
      en: "RecruiteInformation",
      ja: "採用情報"
    } as any,
    aboutCompany: {
      en: "Corporate Information",
      ja: "会社概要"
    } as any,
  };

}

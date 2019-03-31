import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  public translation = {
    contacts: {
      en: 'Contacts',
      ja: '問い合わせ'
    } as any,
    lcnemWallet: {
      en: 'LCNEM Wallet',
      ja: 'LCNEM Wallet'
    } as any,
    ticketP2p: {
      en: 'Ticket Peer to Peer',
      ja: 'ちけっとピアツーピア'
    } as any,
    recruiteInformation: {
      en: 'RecruiteInformation',
      ja: '採用情報'
    } as any,
    mediaKit: {
      en: 'Media Kit',
      ja: 'メディア　キット'
    } as any,
    aboutCompany: {
      en: 'Corporate Information',
      ja: '会社概要'
    } as any,
  };

  ngOnInit() {
  }

}

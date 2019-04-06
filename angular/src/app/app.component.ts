import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public get lang() { return this.language.code; }

  constructor(
    private router: Router,
    private language: LanguageService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        document.getElementById('mat-drawer-content')!.scrollTo(0, 0)
      }
    });
  }

  public translation = {
    home: {
      en: "Home",
      ja: "ホーム"
    } as any,
    aboutCompany: {
      en: 'About us',
      ja: '会社概要'
    } as any,
    contacts: {
      en: 'Contacts',
      ja: '問い合わせ'
    } as any,
    recruiteInformation: {
      en: 'Recruite',
      ja: '採用情報'
    } as any,
    mediaKit: {
      en: 'Media kit',
      ja: 'メディアキット'
    } as any
  };
}

import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css']
})
export class RecruitComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  public translation = {
    recruit: {
      en: 'Recruit',
      ja: '採用情報'
    } as any,
    contact: {
      en: 'Contact us',
      ja: 'まずは話を聞いてみる'
    } as any
  };

  ngOnInit() {
  }
}

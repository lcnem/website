import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    lcnemInc: {
      en: "LCNEM, Inc.",
      ja: "株式会社LCNEM"
    } as any,
    privacyPolicy: {
      ja: "プライバシーポリシー",
      en: "Privacy Policy"
    } as any
  };
}

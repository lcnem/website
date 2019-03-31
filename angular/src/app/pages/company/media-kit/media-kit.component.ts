import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-media-kit',
  templateUrl: './media-kit.component.html',
  styleUrls: ['./media-kit.component.css']
})
export class MediaKitComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    mediaKit: {
      en: 'Media kit',
      ja: 'メディアキット'
    } as any,
    companyLogo: {
      en: "Company logo",
      ja: "ロゴ"
    } as any,
    download: {
      en: 'Download',
      ja: 'ダウンロード'
    } as any
  };

}

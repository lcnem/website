import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    public global: GlobalDataService
  ) { }

  ngOnInit() {
  }

  public translation = {
    lcnemInc: {
      en: "LCNEM, Inc.",
      ja: "株式会社LCNEM"
    } as any,
    recruiteInformation: {
      en: "RecruiteInformation",
      ja: "採用情報"
    } as any,
    aboutCompany: {
      en: "Corporate Information",
      ja: "会社概要"
    } as any
  };
}

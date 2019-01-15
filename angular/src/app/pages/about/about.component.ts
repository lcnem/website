import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }


  public translation = {
    corporateInformation: {
      en: "About Corporate",
      ja: "会社概要"
    } as any,
    corporateName: {
      en: "Corporate Name",
      ja: "会社名"
    } as any,
    name: {
      en: "LCNEM, Inc.",
      ja: "株式会社LCNEM"
    } as any,
    corporateAddress: {
      en: "Address",
      ja: "住所",
    } as any,
    corporateExecutiveOfficer: {
      en: "CEO",
      ja: "代表取締役"
    } as any,
    capitalStock: {
      en: "Capital",
      ja: "資本金等"
    } as any,
    address: {
      en: "Kyoto-city Kamigyo-ku Aburanokoji Nakadachiuri Sagaru Kainokamicho 97 Nishijin sangyo souzou kaikan 2F",
      ja: "京都市上京区油小路中立売下る甲斐守町97番地西陣産業創造會舘2階"
    } as any,
    ceoName: {
      en: "Yu Kimura",
      ja: "木村　優"
    } as any,
    establishmentDate: {
      en: "Date of establishment",
      ja: "設立日"
    } as any,
    capitalAmount: {
      en: "9,050,000 Yen",
      ja: "9,050,000 円"
    } as any
  }

}

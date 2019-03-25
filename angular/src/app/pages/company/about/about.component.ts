import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }


  public translation = {
    corporateInformation: {
      en: 'About Corporate',
      ja: '会社概要'
    } as any,
    corporateName: {
      en: 'Corporate Name',
      ja: '会社名'
    } as any,
    name: {
      en: 'LCNEM, Inc.',
      ja: '株式会社LCNEM'
    } as any,
    corporateAddress: {
      en: 'Address',
      ja: '住所',
    } as any,
    address: {
      en: 'Kyoto-city Kamigyo-ku Aburanokoji Nakadachiuri Sagaru Kainokamicho 97 Nishijin sangyo souzou kaikan 2F',
      ja: '京都市上京区油小路中立売下る甲斐守町97番地西陣産業創造會舘2階'
    } as any,
    capitalStock: {
      en: 'Capital',
      ja: '資本金等'
    } as any,
    establishmentDate: {
      en: 'Date of establishment',
      ja: '設立日'
    } as any,
    capitalAmount: {
      en: '9,050,000 Yen',
      ja: '9,050,000 円'
    } as any,
    yuPosition: {
      en: [
        "Representative director",
        "Chief Executive Officer",
        "Chief Technology Officer"
      ],
      ja: [
        "代表取締役",
        "最高経営責任者",
        "最高技術責任者"
      ]
    } as any,
    yu: {
      en: "Yu Kimura",
      ja: "木村 優"
    } as any,
    takeruPosition: {
      en: [
        "Director",
        "Chief Operation Officer",
        "Chief Financial Officer"
      ],
      ja: [
        "取締役",
        "最高執行責任者",
        "最高財務責任者"
      ]
    } as any,
    takeru: {
      en: "Takeru Shimojima",
      ja: "下島 健"
    } as any,
    takuyaPosition: {
      en: [
        "Execuive Officer",
        "Chief Marketing Officer"
      ],
      ja: [
        "執行役員",
        "最高マーケティング責任者"
      ]
    } as any,
    takuya: {
      en: "Takuya Matsu",
      ja: "松 拓也"
    } as any,
    xxxPosition: {
      en: [
        "Executive Officer",
        "Chief Development Officer"
      ],
      ja: [
        "執行役員",
        "最高開発責任者"
      ]
    } as any,
    xxx: {
      en: "Recruiting",
      ja: "募集中"
    } as any
  };

  ngOnInit() {
  }

}

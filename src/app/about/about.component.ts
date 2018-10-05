import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    public global: GlobalDataService
  ) { }

  ngOnInit() {
  }


  public translation = {
    corporateInformation: {
      en: "About Corporate",
      ja: "会社概要"
    },
    corporateName: {
      en: "Corporate Name",
      ja: "会社名"
    },
    name: {
      en: "LCNEM,Inc",
      ja: "株式会社LCNEM"
    },
    corporateAddress: {
      en: "Address",
      ja: "住所",
    },
    corporateExecutiveOfficer: {
      en: "CEO",
      ja: "代表取締役"
    },
    capitalStock: {
      en: "Capital Stock and so on",
      ja: "資本金等"
    },
    address: {
      en: "Kyoto-city Kamigyo-ku Aburanokoji Nakadachiuri Sagaru Kainokamicho 97 Nishijin sangyo souzou kaikan 2F",
      ja: "京都市上京区油小路中立売下る甲斐守町97番地西陣産業創造會舘2階"
    },
    ceoName: {
      en: "Yu Kimura",
      ja: "木村　優"
    },
    establishmentDate: {
      en: "Date of establishment",
      ja: "設立日"
    },
    capitalAmount: {
      en: "9,050,000 yen",
      ja: "9,050,000 円"
    }
  }

}

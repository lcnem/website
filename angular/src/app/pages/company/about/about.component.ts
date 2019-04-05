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

  public defines = [
    {
      term: {
        en: 'Corporate name',
        ja: '会社名'
      } as any,
      description: {
        en: 'LCNEM, Inc.',
        ja: '株式会社LCNEM'
      } as any
    },
    {
      term: {
        en: 'Address',
        ja: '住所'
      } as any,
      description: {
        en: 'Kyoto-city Kamigyo-ku Aburanokoji Nakadachiuri Sagaru Kainokamicho 97 Nishijin sangyo souzou kaikan 2F',
        ja: '京都市上京区油小路中立売下る甲斐守町97番地西陣産業創造會舘2階'
      } as any
    },
    {
      term: {
        en: 'Capital stock',
        ja: '資本金等'
      } as any,
      description: {
        en: '9,050,000 Yen',
        ja: '9,050,000 円'
      } as any
    },
    {
      term: {
        en: 'Date of establishment',
        ja: '設立日'
      } as any,
      description: {
        en: '2018/03',
        ja: '2018/03'
      } as any
    },
    {
      term: {
        en: 'Accounting period',
        ja: '会計期間'
      } as any,
      description: {
        en: 'Jan - Dec',
        ja: '1月～12月'
      } as any
    },
    {
      term: {
        en: 'Representative director',
        ja: '代表取締役'
      } as any,
      description: {
        en: 'Yu Kimura',
        ja: '木村 優'
      } as any
    }
  ];

  public officers = [
    {
      name: {
        en: 'Yu Kimura',
        ja: '木村 優'
      } as any,
      post: [
        {
          en: 'Representative director',
          ja: '代表取締役'
        } as any,
        {
          en: 'CEO (Chief Executive Officer)',
          ja: 'CEO (最高経営責任者)'
        } as any,
        {
          en: 'CTO (Chief Technology Officer)',
          ja: 'CTO (最高技術責任者)'
        } as any
      ]
    },
    {
      name: {
        en: 'Takeru Shimojima',
        ja: '下島 健'
      } as any,
      post: [
        {
          en: 'Director',
          ja: '取締役'
        } as any,
        {
          en: 'COO (Chief Operation Officer)',
          ja: 'COO (最高執行責任者)'
        } as any,
        {
          en: 'CFO (Chief Financial Officer)',
          ja: 'CFO (最高財務責任者)'
        } as any
      ]
    },
    {
      name: {
        en: 'Takuya Matsuda',
        ja: '松田 拓也'
      } as any,
      post: [
        {
          en: 'Executive officer',
          ja: '執行役員'
        } as any,
        {
          en: 'CMO (Chief Marketing Officer)',
          ja: 'CMO (最高マーケティング責任者)'
        } as any
      ]
    }
  ]

  public translation = {
    corporateInformation: {
      en: 'Corporate information',
      ja: '企業情報'
    } as any,
    officers: {
      en: 'Officers',
      ja: '役員'
    } as any
  };

  ngOnInit() {
  }

}

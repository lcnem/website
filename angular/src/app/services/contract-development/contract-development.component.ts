import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-contract-development',
  templateUrl: './contract-development.component.html',
  styleUrls: ['./contract-development.component.css']
})
export class ContractDevelopmentComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public ledger = [
    {
      image: 'assets/images/dlt/nem.svg',
      name: 'NEM'
    },
    {
      image: 'assets/images/dlt/tendermint.svg',
      name: 'Tendermint(Cosmos SDK)'
    },
  ];

  public translation = {
    contractDevelopment: {
      en: "Contract development",
      ja: "受託開発"
    } as any,
    contact: {
      en: "Contact us",
      ja: "問い合わせ"
    } as any
  };
}

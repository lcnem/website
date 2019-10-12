import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { TRANSLATION } from './contract-development.translation';

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

  public translation = TRANSLATION;
}

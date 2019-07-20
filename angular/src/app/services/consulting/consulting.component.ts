import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent implements OnInit {
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
    consulting: {
      en: "Consulting/Lecture",
      ja: "コンサルティング/講師"
    } as any,
    contact: {
      en: "Contact us",
      ja: "問い合わせ"
    } as any
  };
}

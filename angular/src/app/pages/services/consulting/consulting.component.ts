import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';

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
      name: 'Tendermint'
    },
    {
      image: 'assets/images/dlt/bitcoin.svg',
      name: 'Bitcoin'
    }
  ];

  public translation = {
    consulting: {
      en: "Consulting",
      ja: "コンサルティング"
    } as any,
    contact: {
      en: "Contact us",
      ja: "問い合わせ"
    } as any
  }
}

import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-digital-legal-currency',
  templateUrl: './digital-legal-currency.component.html',
  styleUrls: ['./digital-legal-currency.component.css']
})
export class DigitalLegalCurrencyComponent implements OnInit {

  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    questionSubsidy: {
      en: "",
      ja: "「アプリへの組み込みはどうやるのですか？」"
    } as any,
    answerSubsidy: {
      en: "",
      ja: "「NEMブロックチェーン使うことで簡単にできます」"
    } as any,
    abountSubsidy: {
      en: "",
      ja: "助成金について"
    } as any,
    show: {
      en: "",
      ja: "のページをご覧ください"
    } as any
  }

}

import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css']
})
export class ChequeComponent implements OnInit {

  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    questionSubsidy: {
      en: "How to implement for you app",
      ja: "アプリへの組み込みはどうやるのですか？"
    } as any,
    answerSubsidy: {
      en: "You implement easily by using NEM blockchain.",
      ja: "NEMブロックチェーン使うことで簡単にできます。"
    } as any,
    abountSubsidy: {
      en: "",
      ja: "助成金について"
    } as any,
    show: {
      en: "",
      ja: "のページをご覧ください。"
    } as any
  }

}

import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-ticket-p2p',
  templateUrl: './ticket-p2p.component.html',
  styleUrls: ['./ticket-p2p.component.css']
})
export class TicketP2pComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    top: {
      en: '',
      ja: '低コスト転売防止のメカニズムデザイン'
    } as any,
    contact: {
      en: "Contact us",
      ja: "問い合わせ"
    } as any
  }
}

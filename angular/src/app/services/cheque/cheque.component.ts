import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../_services/language.service';
import { TRANSLATION } from './check.translation';

@Component({
  selector: 'app-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.css']
})
export class ChequeComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = TRANSLATION;
}

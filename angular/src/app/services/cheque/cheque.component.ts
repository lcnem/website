import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { TRANSLATION } from 'src/app/app.translation';
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

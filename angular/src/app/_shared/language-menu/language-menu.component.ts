import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../_services/language.service';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.css']
})
export class LanguageMenuComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }


  ngOnInit() {
  }

  public setLanguage(twoLetter: string) {
    this.language.code = twoLetter;
  }

}

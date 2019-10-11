import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../_services/language.service';
import { TRANSLATION } from './page-not-found.translation';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  public translation = TRANSLATION;

  ngOnInit() {
  }

}

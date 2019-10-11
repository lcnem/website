import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../_services/language.service';
import { TRANSLATION } from './footer.translation';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  public translation = TRANSLATION;

  ngOnInit() {
  }
}

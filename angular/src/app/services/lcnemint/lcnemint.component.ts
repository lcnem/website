import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { TRANSLATION } from './lcnemint.translation';

@Component({
  selector: 'app-lcnemint',
  templateUrl: './lcnemint.component.html',
  styleUrls: ['./lcnemint.component.css']
})
export class LcnemintComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = TRANSLATION;
}

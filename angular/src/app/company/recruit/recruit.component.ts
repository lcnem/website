import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { TRANSLATION } from './recruit.translation';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.css']
})
export class RecruitComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  public translation = TRANSLATION;

  ngOnInit() {
  }
}

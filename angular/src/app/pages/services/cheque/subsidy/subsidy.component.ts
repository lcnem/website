import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../../services/language/language.service';

@Component({
  selector: 'app-subsidy',
  templateUrl: './subsidy.component.html',
  styleUrls: ['./subsidy.component.css']
})
export class SubsidyComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

}

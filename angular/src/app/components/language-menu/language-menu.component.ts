import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LanguageService } from '../../services/language.service';
import { State } from '../../store/index'
import { SetLanguage } from '../../store/language/language.actions';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.css']
})
export class LanguageMenuComponent implements OnInit {
  public get lang() { return this.language.twoLetter; }

  constructor(
    private store: Store<State>,
    private language: LanguageService
  ) { }

  ngOnInit() {
  }
  public setLanguage(twoLetter: string) {
    this.store.dispatch(new SetLanguage({ twoLetter: twoLetter })) 
  }

}

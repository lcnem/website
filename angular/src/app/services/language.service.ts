import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/index'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private _twoLetter = "";
  public get twoLetter() { return this._twoLetter; }

  constructor(
    private store: Store<State>
  ) {
    this.store.select(state => state.language).subscribe(
      language => {
        this._twoLetter = language.twoLetter;
      }
    )
  }
}

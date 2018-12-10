import { Injectable } from '@angular/core';
import { RxStateStore } from 'rx-state-store-js';

@Injectable({
  providedIn: 'root'
})
export class LanguageService extends RxStateStore<State> {
  constructor() {
    super({
      twoLetter: window.navigator.language.substr(0, 2) == "ja" ? "ja" : "en"
    })
  }

  public get twoLetter() { return this._state.twoLetter; }

  public setLanguage(twoLetter: string) {
    this.streamState({twoLetter})
  }
}

interface State {
  twoLetter: string
}
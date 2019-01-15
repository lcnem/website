import { Injectable } from '@angular/core';
import { RxStateStore } from 'rx-state-store-js'

@Injectable({
  providedIn: 'root'
})
export class LanguageService extends RxStateStore<State> {
  constructor() {
    super(
      {
        twoLetter: window.navigator.language.substr(0, 2) == "ja" ? "ja" : "en"
      }
    )
  }

  public setLanguage(twoLetter: string) {
    this.streamState(
      {
        ...this.state,
        twoLetter: twoLetter
      }
    )
  }
  
  public get twoLetter() { return this.state.twoLetter; }
}

interface State {
  twoLetter: string
}

interface State {
  twoLetter: string
}
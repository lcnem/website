import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// ライブラリ化後は以下を消してライブライから読み込む
class ReactiveService<T> {
  protected _subject$ = new Subject<T>()
  protected _state: T
  protected _state$ = this._subject$.asObservable()

  public get state() { return this._state }
  public get state$() { return this._state$ }

  constructor(state: T) {
    this._state = state
    this._subject$.next(this._state)
    this._state$.subscribe(
      (state) => {
        this._state = state
      }
    )
  }
}


@Injectable({
  providedIn: 'root'
})
export class LanguageService extends ReactiveService<State> {
  constructor() {
    super({
      twoLetter: window.navigator.language.substr(0, 2) == "ja" ? "ja" : "en"
    })
  }

  public get twoLetter() { return this._state.twoLetter; }

  public setLanguage(twoLetter: string) {
    this._subject$.next({
      ...this._state,
      twoLetter: twoLetter
    })
  }
}

interface State {
  twoLetter: string
}
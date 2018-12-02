import { Action } from '@ngrx/store';

export enum LanguageActionTypes {
  SetLanguage = '[Language] Set Language'
}

export class SetLanguage implements Action {
  readonly type = LanguageActionTypes.SetLanguage;

  constructor(
    public payload: {
      twoLetter: string;
    }
  ) {}
}

export type LanguageActions = SetLanguage;

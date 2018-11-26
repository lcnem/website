import { Action } from '@ngrx/store';

export enum LanguageActionTypes {
  LoadLanguages = '[Language] Load Languages'
}

export class LoadLanguages implements Action {
  readonly type = LanguageActionTypes.LoadLanguages;
}

export type LanguageActions = LoadLanguages;

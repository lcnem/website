import { Action } from '@ngrx/store';
import { LanguageActionTypes, LanguageActions } from './language.actions';


export interface State {
  twoLetter: string;
}

export const initialState: State = {
  twoLetter: window.navigator.language.substr(0, 2) == "ja" ? "ja" : "en"
};

export function reducer(
  state = initialState,
  action: LanguageActions
): State {
  switch (action.type) {
    case LanguageActionTypes.SetLanguage: {
      return {
        twoLetter: action.payload.twoLetter
      }
    }

    default:
      return state;
  }
}

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as LanguageReducer from './language/language.reducer';

export interface State {
  language: LanguageReducer.State
}

export const reducers: ActionReducerMap<State, any> = {
  language: LanguageReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import { Action } from '@ngrx/store';

export enum RssActionTypes {
  LoadRss = 'LoadRss',
  LoadRssFetch = 'LoadRssFetch',
  LoadRssSuccess = 'LoadRssSuccess',
  LoadRssError = 'LoadRssFetch'
}

export class LoadRss implements Action {
  readonly type = RssActionTypes.LoadRss;
}

export class LoadRssFetch implements Action {
  readonly type = RssActionTypes.LoadRssFetch;
}

export class LoadRssSuccess implements Action {
  readonly type = RssActionTypes.LoadRssSuccess;
}

export class LoadRssError implements Action {
  readonly type = RssActionTypes.LoadRssError;
}


export type RssActions = LoadRss | LoadRssFetch | LoadRssSuccess | LoadRssError;

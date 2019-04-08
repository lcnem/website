import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RssEffects } from './rss.effects';

describe('RssEffects', () => {
  let actions$: Observable<any>;
  let effects: RssEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RssEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RssEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

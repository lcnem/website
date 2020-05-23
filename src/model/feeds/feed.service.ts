import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedsInfrastructureService } from './feeds.infrastructure.service';

export type Data = {
  title: string;
  url: string;
  date: Date;
};

export interface IFeedsInfrastructureService {
  inside$: () => Observable<Data[] | undefined>;
}

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  iFeedsInfrastructure: IFeedsInfrastructureService;

  constructor(private feedsInfrastructure: FeedsInfrastructureService) {
    this.iFeedsInfrastructure = feedsInfrastructure;
  }

  inside$() {
    return this.iFeedsInfrastructure.inside$();
  }
}

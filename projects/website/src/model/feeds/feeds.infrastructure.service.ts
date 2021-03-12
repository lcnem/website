import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IFeedsInfrastructureService } from './feed.service';

type _Data = {
  rss: {
    channel: {
      item: {
        title: string[];
        link: string[];
        pubDate: string[];
      }[];
    }[];
  };
};

@Injectable({
  providedIn: 'root',
})
export class FeedsInfrastructureService implements IFeedsInfrastructureService {
  static readonly collectionPath = 'feeds';
  static readonly documentID = 'inside';

  constructor(private firestore: AngularFirestore) {}

  inside$() {
    return this.firestore
      .collection(FeedsInfrastructureService.collectionPath)
      .doc<_Data>(FeedsInfrastructureService.documentID)
      .valueChanges()
      .pipe(
        map((data) =>
          data?.rss.channel[0].item.map((e) => ({
            title: e.title[0],
            url: e.link[0],
            date: new Date(e.pubDate[0]),
          })),
        ),
      );
  }
}

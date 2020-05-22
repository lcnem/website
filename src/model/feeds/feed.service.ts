import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

type Data_ = {
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

export type Data = {
  title: string;
  url: string;
  date: Date;
};

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  static readonly path = 'feeds';
  inside$: Observable<Data[] | undefined>;

  constructor(private firestore: AngularFirestore) {
    this.inside$ = this.firestore
      .collection(FeedService.path)
      .doc<Data_>('inside')
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

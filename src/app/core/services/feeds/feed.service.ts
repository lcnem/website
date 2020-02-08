import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

export type Data = {
  title: string;
  pubData: string;
};

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  static readonly path = 'feeds';
  inside$: Observable<Data>;

  constructor(private firestore: AngularFirestore) {
    this.inside$ = this.firestore
      .collection(FeedService.path)
      .doc<Data>('inside')
      .valueChanges();
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

export interface Data {
  title: string
  pubData: string
}
@Injectable({
  providedIn: 'root'
})
export class InsideService {
  feeds$: Observable<Data | undefined>;

  constructor(private firestore: AngularFirestore) {
    this.feeds$ = this.getFeed();
  }
  getFeed() {
    return this.firestore
      .collection('feeds')
      .doc<Data>('inside')
      .valueChanges();
  }
}

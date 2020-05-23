import { Component, OnInit } from '@angular/core';
import { FeedService, Data } from 'src/model/feeds/feed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  inside$: Observable<Data[] | undefined>;
  constructor(private feed: FeedService) {
    this.inside$ = this.feed.inside$();
  }

  ngOnInit() {}
}

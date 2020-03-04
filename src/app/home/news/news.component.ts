import { Component, OnInit } from '@angular/core';
import { FeedService, Data } from 'src/domain/feeds/feed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  inside$: Observable<Data[]>;
  constructor(private feed: FeedService) {
    this.inside$ = this.feed.inside$;
  }

  ngOnInit() {}
}

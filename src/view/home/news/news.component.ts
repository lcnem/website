import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/model/feeds/feed.service';

@Component({
  selector: 'view-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  @Input()
  inside?: Data[];

  constructor() {}

  ngOnInit() {}
}

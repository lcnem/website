import { Component, OnInit, Input } from '@angular/core';
import { Data } from 'src/model/feeds/feed.service';

@Component({
  selector: 'view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input()
  inside?: Data[];

  constructor() {}

  ngOnInit(): void {}
}

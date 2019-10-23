import { Component, OnInit } from '@angular/core';
import { InsideService, Data } from '../../core/services/inside.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  items$!: Observable<Data | undefined>;

  constructor(private insideService: InsideService) {}

  ngOnInit() {
    this.items$ = this.insideService.feeds$;
  }
}

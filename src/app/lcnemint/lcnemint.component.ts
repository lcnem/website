import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-lcnemint',
  templateUrl: './lcnemint.component.html',
  styleUrls: ['./lcnemint.component.css']
})
export class LcnemintComponent implements OnInit {

  constructor(
    public global: GlobalDataService
  ) { }

  ngOnInit() {
  }

}

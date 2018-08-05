import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../services/global-data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
      public global: GlobalDataService
    ) { }

    ngOnInit() {}

    public translation = {
      language: {
        en: "Language",
        ja: "言語"
      }
    }
}

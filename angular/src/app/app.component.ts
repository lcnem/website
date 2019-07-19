import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageService } from './shared/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public get lang() { return this.language.code; }

  constructor(
    private router: Router,
    private language: LanguageService
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        document.getElementById('mat-drawer-content')!.scrollTo(0, 0)
      }
    });
  }
}

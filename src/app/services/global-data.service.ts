import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  public lang = "en";

  constructor(
    private router: Router
  ) {
    this.lang = window.navigator.language.substr(0,2) == "ja" ? "ja" : "en";
  }
  
  public back() {
    if (history.length > 1) {
      history.back();
      return;
    }
    this.router.navigate([""]);
  }
}

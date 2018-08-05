import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  public lang = "en";

  constructor() {
    this.lang = window.navigator.language.substr(0,2) == "ja" ? "ja" : "en";
  }
}

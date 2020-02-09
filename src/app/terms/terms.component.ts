import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
})
export class TermsComponent implements OnInit {
  public safeSite: SafeResourceUrl;
  constructor(sanitizer: DomSanitizer) {
    this.safeSite = sanitizer.bypassSecurityTrustResourceUrl(
      `assets/terms/ja.txt`,
    );
  }

  ngOnInit(): void {}
}

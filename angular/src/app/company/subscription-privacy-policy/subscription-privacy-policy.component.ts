import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../core/services/language.service';
import { TRANSLATION } from './subscription-privacy-policy.translation';

@Component({
  selector: 'app-subscription-privacy-policy',
  templateUrl: './subscription-privacy-policy.component.html',
  styleUrls: ['./subscription-privacy-policy.component.css']
})
export class SubscriptionPrivacyPolicyComponent implements OnInit {
  public get lang() { return this.language.code; }
  constructor(
    private language: LanguageService,
    sanitizer: DomSanitizer
  ) {
    this.safeSite = sanitizer.bypassSecurityTrustResourceUrl(`assets/terms/subscription-ja.txt`);
  }

  public safeSite: SafeResourceUrl;

  public translation = TRANSLATION;

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  public safeSite: SafeResourceUrl;
  constructor(
    public global: GlobalDataService,
    sanitizer: DomSanitizer
  ) {
    this.safeSite = sanitizer.bypassSecurityTrustResourceUrl(`assets/terms/ja.txt`);
  }

  ngOnInit() {
  }

  public translation = {
    privacyPolicy: {
      ja: "プライバシーポリシー",
      en: "Privacy Policy"
    } as any
  }

}

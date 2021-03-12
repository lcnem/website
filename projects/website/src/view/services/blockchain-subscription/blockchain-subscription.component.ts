import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'view-blockchain-subscription',
  templateUrl: './blockchain-subscription.component.html',
  styleUrls: ['./blockchain-subscription.component.css'],
})
export class BlockchainSubscriptionComponent implements OnInit {
  public safeSite: SafeResourceUrl;
  constructor(sanitizer: DomSanitizer) {
    this.safeSite = sanitizer.bypassSecurityTrustResourceUrl(
      `assets/terms/blockchain-subscription/ja.txt`,
    );
  }
  ngOnInit(): void {}
}

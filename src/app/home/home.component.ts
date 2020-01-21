import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public services = [
    {
      name: 'Blockchain Subscription',
      link: 'services/blockchain-subscription',
      image: 'assets/images/development.jpg',
      copy: 'サブスクリプション型のブロックチェーン開発サービス',
    } as any,
    {
      name: 'Minimum Viable Product',
      link: 'services/minimum-viable-product',
      image: 'assets/images/consulting.jpg',
      copy: 'MVP開発設計参加&コンサルティングサービス',
    } as any,
    {
      name: 'System Integration',
      link: 'services/minimum-viable-product',
      image: 'assets/images/development.jpg',
      copy: 'システム開発受託',
    } as any,
  ];

  ngOnInit() {
  }

}

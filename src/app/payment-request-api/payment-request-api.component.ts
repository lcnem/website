import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';

@Component({
  selector: 'app-payment-request-api',
  templateUrl: './payment-request-api.component.html',
  styleUrls: ['./payment-request-api.component.css']
})
export class PaymentRequestApiComponent implements OnInit {

  constructor(
    public global: GlobalDataService
  ) { }

  ngOnInit() {
  }

}

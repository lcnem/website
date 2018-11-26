import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../../services/global-data.service';

@Component({
  selector: 'app-emergency-cosign',
  templateUrl: './emergency-cosign.component.html',
  styleUrls: ['./emergency-cosign.component.css']
})
export class EmergencyCosignComponent implements OnInit {

  constructor(public global: GlobalDataService) { }

  ngOnInit() {
  }

}

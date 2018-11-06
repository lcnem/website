import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.css']
})
export class BodyContainerComponent implements OnInit {

  constructor(public global: GlobalDataService) {}
  @Input() headerPosition!: string;

  ngOnInit() {
  }

}

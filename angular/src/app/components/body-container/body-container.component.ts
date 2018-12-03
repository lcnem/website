import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.css']
})
export class BodyContainerComponent implements OnInit {

  constructor() {}
  @Input() headerPosition!: string;
  @Input() color: string = "normal";

  ngOnInit() {
  }

}

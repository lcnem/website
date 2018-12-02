import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css']
})
export class RoundedButtonComponent implements OnInit {

  constructor() { }

  @Input() color:string = "#0242BE";
  @Input() backgroundColor:string = "#fff";
  @Input() link: string = "/";
  @Input() isBlank: boolean = false;

  public style!: {
    'color': string;
    'background-color': string;
  } 

  ngOnInit() {
    this.style = {
      'color': this.color,
      'background-color': this.backgroundColor
    }
  }

}

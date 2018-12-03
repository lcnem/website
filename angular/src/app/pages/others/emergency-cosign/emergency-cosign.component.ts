import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-emergency-cosign',
  templateUrl: './emergency-cosign.component.html',
  styleUrls: ['./emergency-cosign.component.css']
})
export class EmergencyCosignComponent implements OnInit {
  public get lang() { return this.language.twoLetter; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/shared/language.service';
import { TRANSLATION } from './media-kit.translation';

@Component({
  selector: 'app-media-kit',
  templateUrl: './media-kit.component.html',
  styleUrls: ['./media-kit.component.css']
})
export class MediaKitComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = TRANSLATION;

}

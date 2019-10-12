import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { TRANSLATION } from './consulting.translation';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.css']
})
export class ConsultingComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = TRANSLATION;
}

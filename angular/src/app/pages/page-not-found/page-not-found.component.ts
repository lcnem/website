import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  public get lang() { return this.language.code; }

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit() {
  }

  public translation = {
    content: {
      ja: `お探しのページは見つかりませんでした。削除・移動されたか入力されたURLに誤りがある可能性があります。
        トップページかページ上部のメニューよりご覧になりたい情報をお探しください。`,
      en: `You have requested a resource that is being modified or has been removed. 
        Please visit our top page or menu to navigate to your area of interest.`
    } as any,
    topPage: {
      ja: "トップページへ",
      en: "Top Page"
    } as any
  }

}

import { Component, OnInit } from '@angular/core';
import { Media } from '../../../models/media-asset.model'

@Component({
  selector: 'app-asset-lists',
  templateUrl: './asset-lists.component.html',
  styleUrls: ['./asset-lists.component.css']
})
export class AssetListsComponent implements OnInit {
  medias: Media[];
  constructor() {
    this.medias = [
      new Media(1, "LCNEM指導", "LCNEMが株式会社として登記しました。", "https://lcnem.cc/")
    ]
  }

  ngOnInit() {
  }



}

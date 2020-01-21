import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [LoadingDialogComponent, TwitterTimelineComponent, HeaderComponent],
  imports: [
    FlexLayoutModule,
    CommonModule,
  ],
  exports: [
    TwitterTimelineComponent,
    HeaderComponent,
    LoadingDialogComponent,
  ]
})
export class SharedModule { }

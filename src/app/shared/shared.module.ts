import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [LoadingDialogComponent, TwitterTimelineComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [TwitterTimelineComponent]
})
export class SharedModule { }

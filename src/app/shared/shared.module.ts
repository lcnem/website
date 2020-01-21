import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [LoadingDialogComponent, TwitterTimelineComponent, HeaderComponent, SectionComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    TwitterTimelineComponent,
    HeaderComponent,
    LoadingDialogComponent,
    SectionComponent,
  ]
})
export class SharedModule { }

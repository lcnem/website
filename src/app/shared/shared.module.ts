import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoadingDialogComponent, TwitterTimelineComponent, HeaderComponent, SectionComponent, FooterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    TwitterTimelineComponent,
    HeaderComponent,
    FooterComponent,
    LoadingDialogComponent,
    SectionComponent,
  ]
})
export class SharedModule { }

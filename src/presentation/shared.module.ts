import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SectionComponent, TwitterTimelineComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, MaterialModule],
  exports: [SectionComponent, TwitterTimelineComponent],
})
export class SharedModule {}

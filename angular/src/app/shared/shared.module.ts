import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SectionComponent } from './section/section.component';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LanguageMenuComponent,
    LoadingDialogComponent,
    PageNotFoundComponent,
    SectionComponent,
    TwitterTimelineComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LanguageMenuComponent,
    SectionComponent,
    TwitterTimelineComponent
  ],
  entryComponents: [

  ]
})
export class SharedModule { }

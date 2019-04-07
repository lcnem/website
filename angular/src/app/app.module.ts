import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import {
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatStepperModule
} from '@angular/material';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AboutComponent } from './pages/company/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyPolicyComponent } from './pages/terms/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { WalletComponent } from './pages/services/wallet/wallet.component';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { RecruitComponent } from './pages/company/recruit/recruit.component';
import { ChequeComponent } from './pages/services/cheque/cheque.component';
import { TicketP2pComponent } from './pages/services/ticket-p2p/ticket-p2p.component';
import { LcnemintComponent } from './pages/services/lcnemint/lcnemint.component';
import { ConsultingComponent } from './pages/services/consulting/consulting.component';
import { TwitterTimelineComponent } from './components/twitter-timeline/twitter-timeline.component';
import { MediaKitComponent } from './pages/company/media-kit/media-kit.component';
import { SectionComponent } from './components/section/section.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    LoadingDialogComponent,
    WalletComponent,
    LanguageMenuComponent,
    RecruitComponent,
    ChequeComponent,
    TicketP2pComponent,
    LcnemintComponent,
    ConsultingComponent,
    TwitterTimelineComponent,
    MediaKitComponent,
    SectionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatStepperModule
  ],
  entryComponents: [
    LoadingDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

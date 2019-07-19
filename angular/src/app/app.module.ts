import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

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
import { FooterComponent } from './shared/footer/footer.component';
import { PrivacyPolicyComponent } from './pages/terms/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingDialogComponent } from './shared/loading-dialog/loading-dialog.component';
import { WalletComponent } from './pages/services/wallet/wallet.component';
import { LanguageMenuComponent } from './shared/language-menu/language-menu.component';
import { RecruitComponent } from './pages/company/recruit/recruit.component';
import { ChequeComponent } from './pages/services/cheque/cheque.component';
import { YourcoinComponent } from './pages/services/yourcoin/yourcoin.component';
import { TicketP2pComponent } from './pages/services/ticket-p2p/ticket-p2p.component';
import { LcnemintComponent } from './pages/services/lcnemint/lcnemint.component';
import { ConsultingComponent } from './pages/services/consulting/consulting.component';
import { ContractDevelopmentComponent } from './pages/services/contract-development/contract-development.component';
import { TwitterTimelineComponent } from './shared/twitter-timeline/twitter-timeline.component';
import { MediaKitComponent } from './pages/company/media-kit/media-kit.component';
import { SectionComponent } from './shared/section/section.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavListComponent } from './shared/nav-list/nav-list.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './services/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './services/effect';

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
    YourcoinComponent,
    TicketP2pComponent,
    LcnemintComponent,
    ConsultingComponent,
    ContractDevelopmentComponent,
    TwitterTimelineComponent,
    MediaKitComponent,
    SectionComponent,
    HeaderComponent,
    NavListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects),
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

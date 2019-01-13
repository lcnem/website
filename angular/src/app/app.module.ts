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
  MatCheckboxModule
} from '@angular/material';
import { FormsModule } from '../../node_modules/@angular/forms';
import { FaqComponent } from './pages/digital-legal-currency/faq/faq.component';
import { AboutComponent } from './pages/company/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyPolicyComponent } from './pages/terms/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BodyContainerComponent } from './components/body-container/body-container.component';
import { EmergencyCosignComponent } from './pages/others/emergency-cosign/emergency-cosign.component';
import { SubsidyComponent } from './pages/digital-legal-currency/subsidy/subsidy.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { RecruitComponent } from './pages/company/recruit/recruit.component';
import { DigitalLegalCurrencyComponent } from './pages/digital-legal-currency/digital-legal-currency.component';
import { CreditComponent } from './pages/credit/credit.component';
import { TicketP2pComponent } from './pages/ticket-p2p/ticket-p2p.component';
import { PointDeputizeComponent } from './pages/services/point-deputize/point-deputize.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FaqComponent,
    AboutComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    AlertDialogComponent,
    ConfirmDialogComponent,
    LoadingDialogComponent,
    HeaderComponent,
    SideNavComponent,
    BodyContainerComponent,
    WalletComponent,
    EmergencyCosignComponent,
    SubsidyComponent,
    EmergencyCosignComponent,
    LanguageMenuComponent,
    RecruitComponent,
    DigitalLegalCurrencyComponent,
    CreditComponent,
    TicketP2pComponent,
    PointDeputizeComponent
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
    MatCheckboxModule
  ],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent,
    LoadingDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
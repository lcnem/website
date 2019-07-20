import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

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
  MatStepperModule,
  MatChipsModule
} from '@angular/material';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AboutComponent } from './company/about/about.component';
import { PrivacyPolicyComponent } from './company/privacy-policy/privacy-policy.component';
import { ContactComponent } from './company/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { RecruitComponent } from './company/recruit/recruit.component';
import { ChequeComponent } from './services/cheque/cheque.component';
import { LcnemintComponent } from './services/lcnemint/lcnemint.component';
import { ConsultingComponent } from './services/consulting/consulting.component';
import { ContractDevelopmentComponent } from './services/contract-development/contract-development.component';
import { MediaKitComponent } from './company/media-kit/media-kit.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './effect';
import { SharedModule } from './shared/shared.module';
import { LoadingDialogComponent } from './shared/loading-dialog/loading-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    RecruitComponent,
    ChequeComponent,
    LcnemintComponent,
    ConsultingComponent,
    ContractDevelopmentComponent,
    MediaKitComponent,
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
    SharedModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    HttpClientModule,
    MatCheckboxModule,
  ],
  entryComponents: [
    LoadingDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

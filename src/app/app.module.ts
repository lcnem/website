import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { ViewModule } from '../view/view.module';
import { MaterialModule } from '../view/material.module';
import { TermsComponent } from './terms/terms.component';

import { LoadingDialogModule } from 'ng-loading-dialog';
import { HomeViewModule } from 'src/view/home/home.module';
import { TermsViewModule } from 'src/view/terms/terms.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, TermsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    LoadingDialogModule,
    MaterialModule,
    ViewModule,
    HomeViewModule,
    TermsViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

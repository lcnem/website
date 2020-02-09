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
import { SharedModule } from './core/modules/shared/shared.module';
import { MaterialModule } from './core/modules/material/material.module';
import { AboutComponent } from './home/about/about.component';
import { OfficersComponent } from './home/officers/officers.component';
import { ServicesComponent } from './home/services/services.component';
import { NewsComponent } from './home/news/news.component';
import { CompanyModule } from './company/company.module';
import { ServicesModule } from './services/services.module';
import { ProductsComponent } from './home/products/products.component';
import { PartnersComponent } from './home/partners/partners.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { TermsComponent } from './terms/terms.component';

import { AngularFirebaseTemplateModule } from 'angular-firebase-template';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OfficersComponent,
    ServicesComponent,
    NewsComponent,
    ProductsComponent,
    PartnersComponent,
    HeaderComponent,
    FooterComponent,
    TermsComponent,
  ],
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
    AngularFirebaseTemplateModule.forRoot({}),
    SharedModule,
    MaterialModule,
    CompanyModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './home/about/about.component';
import { OfficersComponent } from './home/officers/officers.component';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { ProductComponent } from './home/product/product.component';
import { NewsComponent } from './home/news/news.component';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OfficersComponent,
    IntroductionComponent,
    ProductComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule,
    SharedModule,
    MaterialModule,
    CompanyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

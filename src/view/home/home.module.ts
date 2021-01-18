import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { OfficersComponent } from './officers/officers.component';
import { ServicesComponent } from './services/services.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { PartnersComponent } from './partners/partners.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { ViewModule } from '../view.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    TechnologiesComponent,
    OfficersComponent,
    ServicesComponent,
    NewsComponent,
    ProductsComponent,
    PartnersComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ViewModule,
  ],
  exports: [HomeComponent],
})
export class HomeViewModule { }

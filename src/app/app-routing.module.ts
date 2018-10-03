import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { LcnemintComponent } from './lcnemint/lcnemint.component';
import { PaymentRequestApiComponent } from './payment-request-api/payment-request-api.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "lcnemint", component: LcnemintComponent },
  { path: "payment-request-api", component: PaymentRequestApiComponent },
  { path: "faq", component: FaqComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { LcnemWalletComponent } from './lcnem-wallet/lcnem-wallet.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { EmergencyCosignComponent } from './others/emergency-cosign/emergency-cosign.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "faq", component: FaqComponent },
  { path: "about", component: AboutComponent },
  { path: "wallet", component: LcnemWalletComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "contact", component: ContactComponent },
  { path: "others/emergency-cosign", component: EmergencyCosignComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

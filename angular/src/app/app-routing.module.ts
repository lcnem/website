import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { WalletComponent } from './pages/wallet/wallet.component'
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EmergencyCosignComponent } from './pages/others/emergency-cosign/emergency-cosign.component';
import { SubsidyComponent } from './pages/subsidy/subsidy.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "faq", component: FaqComponent },
  { path: "about", component: AboutComponent },
  { path: "wallet", component: WalletComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "contact", component: ContactComponent },
  { path: "subsidy", component: SubsidyComponent },
  { path: "others/emergency-cosign", component: EmergencyCosignComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FaqComponent } from './pages/digital-legal-currency/faq/faq.component';
import { AboutComponent } from './pages/company/about/about.component';
import { WalletComponent } from './pages/wallet/wallet.component'
import { PrivacyPolicyComponent } from './pages/terms/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { EmergencyCosignComponent } from './pages/others/emergency-cosign/emergency-cosign.component';
import { SubsidyComponent } from './pages/digital-legal-currency/subsidy/subsidy.component';
import { RecruitComponent } from './pages/company/recruit/recruit.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "company/about", component: AboutComponent },
  { path: "company/contact", component: ContactComponent },
  { path: "company/recruit", component: RecruitComponent },
  { path: "digital-legal-currency/faq", component: FaqComponent },
  { path: "digital-legal-currency/subsidy", component: SubsidyComponent },
  { path: "wallet", component: WalletComponent },
  { path: "terms/privacy-policy", component: PrivacyPolicyComponent },
  { path: "others/emergency-cosign", component: EmergencyCosignComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

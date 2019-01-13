import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/company/about/about.component';
import { WalletComponent } from './pages/wallet/wallet.component'
import { PrivacyPolicyComponent } from './pages/terms/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { EmergencyCosignComponent } from './pages/others/emergency-cosign/emergency-cosign.component';
import { SubsidyComponent } from './pages/digital-legal-currency/subsidy/subsidy.component';
import { RecruitComponent } from './pages/company/recruit/recruit.component';
import { DigitalLegalCurrencyComponent } from './pages/digital-legal-currency/digital-legal-currency.component';
import { TicketP2pComponent } from './pages/ticket-p2p/ticket-p2p.component';
import { CreditComponent } from './pages/credit/credit.component';
import { PointDeputizeComponent } from './pages/services/point-deputize/point-deputize.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "company/about", component: AboutComponent },
  { path: "company/contact", component: ContactComponent },
  { path: "company/recruit", component: RecruitComponent },
  { path: "digital-legal-currency", component: DigitalLegalCurrencyComponent },
  { path: "digital-legal-currency/subsidy", component: SubsidyComponent },
  { path: "wallet", component: WalletComponent },
  { path: "services/credit", component: CreditComponent},
  { path: "services/ticket-p2p", component: TicketP2pComponent},
  { path: "services/point-deputize", component: PointDeputizeComponent},
  { path: "others/emergency-cosign", component: EmergencyCosignComponent },
  { path: "terms/privacy-policy", component: PrivacyPolicyComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

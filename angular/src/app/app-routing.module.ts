import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/company/about/about.component';
import { PrivacyPolicyComponent } from './pages/terms/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { RecruitComponent } from './pages/company/recruit/recruit.component';
import { ChequeComponent } from './pages/services/cheque/cheque.component';
import { WalletComponent } from './pages/services/wallet/wallet.component'
import { TicketP2pComponent } from './pages/services/ticket-p2p/ticket-p2p.component';
import { CreditComponent } from './pages/services/credit/credit.component';
import { PointDeputizeComponent } from './pages/services/point-deputize/point-deputize.component';
import { EmergencyCosignComponent } from './pages/services/emergency-cosign/emergency-cosign.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "company/about", component: AboutComponent },
  { path: "company/contact", component: ContactComponent },
  { path: "company/recruit", component: RecruitComponent },
  { path: "services/cheque", component: ChequeComponent },
  { path: "services/wallet", component: WalletComponent },
  { path: "services/credit", component: CreditComponent},
  { path: "services/ticket-p2p", component: TicketP2pComponent},
  { path: "services/point-deputize", component: PointDeputizeComponent},
  { path: "services/emergency-cosign", component: EmergencyCosignComponent },
  { path: "terms/privacy-policy", component: PrivacyPolicyComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

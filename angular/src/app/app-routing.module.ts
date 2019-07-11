import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/company/about/about.component';
import { PrivacyPolicyComponent } from './pages/terms/privacy-policy/privacy-policy.component';
import { ContactComponent } from './pages/company/contact/contact.component';
import { RecruitComponent } from './pages/company/recruit/recruit.component';
import { ChequeComponent } from './pages/services/cheque/cheque.component';
import { YourcoinComponent } from './pages/services/yourcoin/yourcoin.component';
import { WalletComponent } from './pages/services/wallet/wallet.component';
import { TicketP2pComponent } from './pages/services/ticket-p2p/ticket-p2p.component';
import { LcnemintComponent } from './pages/services/lcnemint/lcnemint.component';
import { ConsultingComponent } from './pages/services/consulting/consulting.component';
import { ContractDevelopmentComponent } from './pages/services/contract-development/contract-development.component';
import { MediaKitComponent } from './pages/company/media-kit/media-kit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company/about', component: AboutComponent },
  { path: 'company/contact', component: ContactComponent },
  { path: 'company/recruit', component: RecruitComponent },
  { path: 'company/media-kit', component: MediaKitComponent },
  { path: 'services/cheque', component: ChequeComponent },
  { path: 'services/yourcoin', component: YourcoinComponent },
  { path: 'services/lcnemint', component: LcnemintComponent },
  { path: 'services/wallet', component: WalletComponent },
  { path: 'services/ticket-p2p', component: TicketP2pComponent },
  { path: 'services/consulting', component: ConsultingComponent },
  { path: 'services/contract-development', component: ContractDevelopmentComponent },
  { path: 'terms/privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AboutComponent } from './company/about/about.component';
import { PrivacyPolicyComponent } from './company/privacy-policy/privacy-policy.component';
import { ContactComponent } from './company/contact/contact.component';
import { RecruitComponent } from './company/recruit/recruit.component';
import { ChequeComponent } from './services/cheque/cheque.component';
import { LcnemintComponent } from './services/lcnemint/lcnemint.component';
import { ConsultingComponent } from './services/consulting/consulting.component';
import { ContractDevelopmentComponent } from './services/contract-development/contract-development.component';
import { MediaKitComponent } from './company/media-kit/media-kit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company/about', component: AboutComponent },
  { path: 'company/contact', component: ContactComponent },
  { path: 'company/recruit', component: RecruitComponent },
  { path: 'company/media-kit', component: MediaKitComponent },
  { path: 'services/cheque', component: ChequeComponent },
  { path: 'services/lcnemint', component: LcnemintComponent },
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

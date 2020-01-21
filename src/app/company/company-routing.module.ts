import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../home/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RecruitComponent } from './recruit/recruit.component';
import { MediaKitComponent } from './media-kit/media-kit.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'recruit', component: RecruitComponent },
  { path: 'media-kit', component: MediaKitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

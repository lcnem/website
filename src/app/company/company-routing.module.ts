import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PresskitComponent } from './presskit/presskit.component';
import { RecruitComponent } from './recruit/recruit.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'presskit', component: PresskitComponent },
  { path: 'recruit', component: RecruitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}

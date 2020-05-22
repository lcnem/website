import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ContactComponent } from './contact/contact.component';
import { RecruitComponent } from './recruit/recruit.component';
import { PresskitComponent } from './presskit/presskit.component';
import { ViewModule } from 'src/view/view.module';
import { CompanyViewModule } from 'src/view/company/company.module';

@NgModule({
  declarations: [ContactComponent, RecruitComponent, PresskitComponent],
  imports: [CommonModule, CompanyRoutingModule, ViewModule, CompanyViewModule],
})
export class CompanyModule {}

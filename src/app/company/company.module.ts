import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ContactComponent } from './contact/contact.component';
import { MediaKitComponent } from './media-kit/media-kit.component';
import { RecruitComponent } from './recruit/recruit.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ContactComponent, MediaKitComponent, RecruitComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class CompanyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { PresskitComponent } from './presskit/presskit.component';
import { RecruitComponent } from './recruit/recruit.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { ViewModule } from '../view.module';

@NgModule({
  declarations: [ContactComponent, PresskitComponent, RecruitComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ViewModule,
  ],
  exports: [ContactComponent, PresskitComponent, RecruitComponent],
})
export class CompanyViewModule {}

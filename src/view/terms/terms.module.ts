import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [TermsComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TermsComponent],
})
export class TermsViewModule {}

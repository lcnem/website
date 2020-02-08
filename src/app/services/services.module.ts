import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlockchainSubscriptionComponent } from './blockchain-subscription/blockchain-subscription.component';
import { SystemIntegrationComponent } from './system-integration/system-integration.component';
import { MinimumViableProductComponent } from './minimum-viable-product/minimum-viable-product.component';
import { FirebaseMigrationComponent } from './firebase-migration/firebase-migration.component';
import { SharedModule } from '../core/modules/shared/shared.module';
import { MaterialModule } from '../core/modules/material/material.module';
import { CompanyModule } from '../company/company.module';

@NgModule({
  declarations: [
    BlockchainSubscriptionComponent,
    SystemIntegrationComponent,
    MinimumViableProductComponent,
    FirebaseMigrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ServicesRoutingModule,
    SharedModule,
    CompanyModule,
  ],
})
export class ServicesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { BlockchainSubscriptionComponent } from './blockchain-subscription/blockchain-subscription.component';
import { SystemIntegrationComponent } from './system-integration/system-integration.component';
import { MinimumViableProductComponent } from './minimum-viable-product/minimum-viable-product.component';
import { FirebaseMigrationComponent } from './firebase-migration/firebase-migration.component';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BlockchainSubscriptionComponent,
    SystemIntegrationComponent,
    MinimumViableProductComponent,
    FirebaseMigrationComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
  ],
  exports: [
    BlockchainSubscriptionComponent,
    SystemIntegrationComponent,
    MinimumViableProductComponent,
    FirebaseMigrationComponent,
    ServicesComponent,
  ]
})
export class ServicesModule { }

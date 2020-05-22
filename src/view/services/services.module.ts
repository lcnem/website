import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainSubscriptionComponent } from './blockchain-subscription/blockchain-subscription.component';
import { FirebaseMigrationComponent } from './firebase-migration/firebase-migration.component';
import { MinimumViableProductComponent } from './minimum-viable-product/minimum-viable-product.component';
import { SystemIntegrationComponent } from './system-integration/system-integration.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { ViewModule } from '../view.module';

@NgModule({
  declarations: [
    BlockchainSubscriptionComponent,
    FirebaseMigrationComponent,
    MinimumViableProductComponent,
    SystemIntegrationComponent,
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule, ViewModule],
  exports: [
    BlockchainSubscriptionComponent,
    FirebaseMigrationComponent,
    MinimumViableProductComponent,
    SystemIntegrationComponent,
  ],
})
export class ServicesViewModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainSubscriptionComponent } from './blockchain-subscription/blockchain-subscription.component';
import { FirebaseMigrationComponent } from './firebase-migration/firebase-migration.component';
import { DxConsultingComponent } from './dx-consulting/dx-consulting.component';
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
    DxConsultingComponent,
  ],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MaterialModule, ViewModule],
  exports: [
    BlockchainSubscriptionComponent,
    FirebaseMigrationComponent,
    MinimumViableProductComponent,
    SystemIntegrationComponent,
    DxConsultingComponent
  ],
})
export class ServicesViewModule { }

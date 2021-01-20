import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlockchainSubscriptionComponent } from './blockchain-subscription/blockchain-subscription.component';
import { SystemIntegrationComponent } from './system-integration/system-integration.component';
import { DxConsultingComponent } from './dx-consulting/dx-consulting.component';
import { MinimumViableProductComponent } from './minimum-viable-product/minimum-viable-product.component';
import { FirebaseMigrationComponent } from './firebase-migration/firebase-migration.component';
import { ViewModule } from 'src/view/view.module';
import { MaterialModule } from 'src/view/material.module';
import { ServicesViewModule } from 'src/view/services/services.module';

@NgModule({
  declarations: [
    BlockchainSubscriptionComponent,
    SystemIntegrationComponent,
    MinimumViableProductComponent,
    FirebaseMigrationComponent,
    DxConsultingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    ServicesRoutingModule,
    ViewModule,
    ServicesViewModule,
  ],
})
export class ServicesModule { }

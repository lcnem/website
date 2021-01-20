import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainSubscriptionComponent } from './blockchain-subscription/blockchain-subscription.component';
import { DxConsultingComponent } from './dx-consulting/dx-consulting.component';
import { MinimumViableProductComponent } from './minimum-viable-product/minimum-viable-product.component';
import { SystemIntegrationComponent } from './system-integration/system-integration.component';
import { FirebaseMigrationComponent } from './firebase-migration/firebase-migration.component';

const routes: Routes = [
  {
    path: 'blockchain-subscription',
    component: BlockchainSubscriptionComponent
  },
  { path: 'minimum-viable-product', component: MinimumViableProductComponent },
  { path: 'dx-consulting', component: DxConsultingComponent },
  { path: 'system-integration', component: SystemIntegrationComponent },
  { path: 'firebase-migration', component: FirebaseMigrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule { }

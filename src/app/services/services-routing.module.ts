import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainSubscriptionComponent } from './blockchain-subscription/blockchain-subscription.component';
import { MinimumViableProductComponent } from './minimum-viable-product/minimum-viable-product.component';
import { SystemIntegrationComponent } from './system-integration/system-integration.component';
import { FirebaseMigrationComponent } from './firebase-migration/firebase-migration.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'blockchain-subscription', component: BlockchainSubscriptionComponent },
  { path: 'minimum-viable-product', component: MinimumViableProductComponent },
  { path: 'system-integration', component: SystemIntegrationComponent },
  { path: 'firebase-migration', component: FirebaseMigrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }

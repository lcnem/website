import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainSubscriptionComponent } from './blockchain-subscription/blockchain-subscription.component';
import { MinimumViableProductComponent } from './minimum-viable-product/minimum-viable-product.component';
import { SystemIntegrationComponent } from './system-integration/system-integration.component';


const routes: Routes = [
  { path: 'blockchain-subscription', component: BlockchainSubscriptionComponent },
  { path: 'minimum-viable-product', component: MinimumViableProductComponent },
  { path: 'system-integration', component: SystemIntegrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }

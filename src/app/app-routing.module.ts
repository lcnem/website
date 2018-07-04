import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { EnComponent } from './en/en.component';
import { JaComponent } from './ja/ja.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "en", component: EnComponent},
    {path: "ja", component: JaComponent},
    {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

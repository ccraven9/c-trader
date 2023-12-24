import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'sell', component: SellPageComponent},
  { path: 'signup', component: SignUpPageComponent},
  { path: 'search-results', component: SearchResultsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
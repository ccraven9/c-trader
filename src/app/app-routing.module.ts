import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { AuctionPageComponent } from './pages/auction-page/auction-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'sell', component: SellPageComponent},
  { path: 'signup', component: SignUpPageComponent},
  { path: 'search-results', component: SearchResultsPageComponent},
  { path: 'auction', component: AuctionPageComponent},
  { path: 'user-profile', component: UserProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuctionPageComponent } from './auction-page/auction-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchResultsPageComponent } from './search-results-page/search-results-page.component';
import { SellPageComponent } from './sell-page/sell-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    AuctionPageComponent,
    LandingPageComponent,
    SearchResultsPageComponent,
    SellPageComponent,
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBarHeaderComponent } from './components/search-bar-header/search-bar-header.component';
import { SubMenuBarComponent } from './components/sub-menu-bar/sub-menu-bar.component';
import { CardDisplayFeatureComponent } from './components/card-display-feature/card-display-feature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { PrimengModule } from './modules/primeng.module';
import { DisplayCardComponent } from './components/card-display-feature/display-card/display-card.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';
import { AuctionPageComponent } from './pages/auction-page/auction-page.component';
import { SearchResultMenuComponent } from './components/search-result-menu/search-result-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarHeaderComponent,
    SubMenuBarComponent,
    CardDisplayFeatureComponent,
    SellPageComponent,
    LandingPageComponent,
    SignUpPageComponent,
    DisplayCardComponent,
    SearchResultsPageComponent,
    AuctionPageComponent,
    SearchResultMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

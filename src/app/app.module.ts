import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';

import { AppComponent } from './app.component';
import { SearchBarHeaderComponent } from './components/search-bar-header/search-bar-header.component';
import { SubMenuBarComponent } from './components/sub-menu-bar/sub-menu-bar.component';
import { CardDisplayFeatureComponent } from './components/card-display-feature/card-display-feature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SellPageComponent } from './pages/sell-page/sell-page.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarHeaderComponent,
    SubMenuBarComponent,
    CardDisplayFeatureComponent,
    SellPageComponent,
    LandingPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    FieldsetModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

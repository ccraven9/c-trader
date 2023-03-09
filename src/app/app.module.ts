import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SearchBarHeaderComponent } from './comps/search-bar-header/search-bar-header.component';
import { SubMenuBarComponent } from './comps/sub-menu-bar/sub-menu-bar.component';
import { DividerModule } from 'primeng/divider';
import { CardDisplayFeatureComponent } from './comps/card-display-feature/card-display-feature.component';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarHeaderComponent,
    SubMenuBarComponent,
    CardDisplayFeatureComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    FieldsetModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

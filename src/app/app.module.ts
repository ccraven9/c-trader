import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PrimengModule } from './modules/primeng.module';
import { YugiohListingService } from './services/yugioh-listing.service';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [YugiohListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

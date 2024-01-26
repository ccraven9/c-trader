import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../modules/primeng.module';
import { AuctionListItemComponent } from './auction-list-item/auction-list-item.component';
import { CardDisplayFeatureComponent } from './card-display-feature/card-display-feature.component';
import { DisplayCardComponent } from './card-display-feature/display-card/display-card.component';
import { SearchBarHeaderComponent } from './search-bar-header/search-bar-header.component';
import { SearchResultMenuComponent } from './search-result-menu/search-result-menu.component';
import { SubMenuBarComponent } from './sub-menu-bar/sub-menu-bar.component';
import { UserProfileAuctionItemComponent } from './user-profile/user-profile-auction-item/user-profile-auction-item.component';
import { SearchResultItemComponent } from './search-result/search-result-item/search-result-item.component';

const declaredComponents = [
  SearchBarHeaderComponent,
  SubMenuBarComponent,
  CardDisplayFeatureComponent,
  DisplayCardComponent,
  SearchResultMenuComponent,
  AuctionListItemComponent,
  UserProfileAuctionItemComponent,
   SearchResultItemComponent
]

@NgModule({
  declarations: [
   ...declaredComponents,
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
   ...declaredComponents,
   PrimengModule
  ]
})
export class ComponentsModule { }

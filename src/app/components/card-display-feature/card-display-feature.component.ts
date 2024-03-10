import { Component } from '@angular/core';
import { YuGiOhCardListing } from 'src/app/models/yugioh-auction.model';
import { PokemonListingService } from 'src/app/services/pokemon-listing.service';
import { YugiohListingService } from 'src/app/services/yugioh-listing.service';

@Component({
  selector: 'app-card-display-feature',
  templateUrl: './card-display-feature.component.html',
  styleUrls: ['./card-display-feature.component.css']
})
export class CardDisplayFeatureComponent {

  yugiohFeaturedListings: YuGiOhCardListing[];
  pokemonFeaturedListings: YuGiOhCardListing[];

  constructor(private yugiohCardListingService: YugiohListingService, pListingService: PokemonListingService) {
    this.yugiohFeaturedListings = this.yugiohCardListingService.getAuctionListings();
    this.pokemonFeaturedListings = pListingService.getAuctionListings();
  }

}

import { Injectable } from '@angular/core';
import { PokemonListingService } from './pokemon-listing.service';
import { YugiohListingService } from './yugioh-listing.service';

@Injectable({
  providedIn: 'root'
})
export class AllListingsService {

  constructor(private pListingService: PokemonListingService, private yListingService: YugiohListingService) { }



  getAllListings() {
    return [...this.pListingService.getAuctionListings(), ...this.yListingService.getAuctionListings()];
  }
}

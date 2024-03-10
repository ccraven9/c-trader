import { Injectable } from '@angular/core';
import { YuGiOhCardListing } from '../models/yugioh-auction.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonListingService {

  private yugiohListings: YuGiOhCardListing[] = [];
  private charListing: YuGiOhCardListing = {
    listingTitle: 'Charizard',
    setPrefix: '4/130',
    totalBids: 6,
    timeRemaining: 7,
    imageArt: "assets/charizard.png",
    currentPrice: 98.50,
    previewDescription: 'This is a mint condition Base Set Charizard',
    condition: 'Mint Condition',
    listingSeller: 'GiggleMonster'
  }

  constructor() {
    this.yugiohListings = [this.charListing, this.charListing, this.charListing, this.charListing];
   }

   getAuctionListings(): YuGiOhCardListing[]{
    return this.yugiohListings;
   }

   getAuctionListing(): YuGiOhCardListing { 
    return this.charListing;
   }
}

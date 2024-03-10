import { Injectable } from '@angular/core';
import { YuGiOhCardListing } from '../models/yugioh-auction.model';

@Injectable({
  providedIn: 'root'
})
export class YugiohListingService {

  private yugiohListings: YuGiOhCardListing[] = [];
  private bewdListing: YuGiOhCardListing = {
    listingTitle: 'Blue Eyes White Dragon',
    setPrefix: 'SDK-001',
    totalBids: 23,
    timeRemaining: 5,
    imageArt: "assets/BlueEyesWhiteDragon-MAMA-EN-URPR-1E.webp",
    currentPrice: 24.50,
    previewDescription: 'This is a mint condition Blue Eyes from SDK-001.',
    condition: 'Mint Condition',
    listingSeller: 'GooberMcGooberson'
  }

  constructor() {
    this.yugiohListings = [this.bewdListing, this.bewdListing, this.bewdListing, this.bewdListing];
   }

   getAuctionListings(): YuGiOhCardListing[]{
    return this.yugiohListings;
   }

   getAuctionListing(): YuGiOhCardListing { 
    return this.bewdListing;
   }


}

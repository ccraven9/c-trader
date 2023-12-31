import { Component } from '@angular/core';
import { YuGiOhCardListing } from 'src/app/models/yugioh-auction.model';
import { YugiohListingService } from 'src/app/services/yugioh-listing.service';

@Component({
  selector: 'app-card-display-feature',
  templateUrl: './card-display-feature.component.html',
  styleUrls: ['./card-display-feature.component.css']
})
export class CardDisplayFeatureComponent {

  yugiohFeaturedListings: YuGiOhCardListing[];

  constructor(private yugiohCardListingService: YugiohListingService) {
    this.yugiohFeaturedListings = this.yugiohCardListingService.getAuctionListings()
  }

}

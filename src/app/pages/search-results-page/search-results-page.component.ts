import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { YuGiOhCardListing } from 'src/app/models/yugioh-auction.model';
import { YugiohListingService } from 'src/app/services/yugioh-listing.service';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent {

  products: YuGiOhCardListing[];

  constructor(private router: Router, private yugiListService: YugiohListingService) {
    this.products = this.yugiListService.getAuctionListings();
  }

  navigateToAuction() {
    this.router.navigate(['auction'])
  }

}

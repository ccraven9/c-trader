import { Component } from '@angular/core';
import { YuGiOhCardListing } from 'src/app/models/yugioh-auction.model';
import { AllListingsService } from 'src/app/services/all-listings.service';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent {

  products: YuGiOhCardListing[];

  constructor(private aListingService: AllListingsService) {
    this.products = this.aListingService.getAllListings();
  }

}

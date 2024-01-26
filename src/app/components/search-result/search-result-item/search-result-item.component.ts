import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { YuGiOhCardListing } from 'src/app/models/yugioh-auction.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent {
  
@Input() listingItem!: YuGiOhCardListing;

constructor(private router: Router) {}


navigateToAuction() {
  this.router.navigate(['auction']);
}



}

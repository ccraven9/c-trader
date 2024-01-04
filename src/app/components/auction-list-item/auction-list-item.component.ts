import { Component} from '@angular/core';
import { MessageService } from 'primeng/api';
import { YuGiOhCardListing } from '../../models/yugioh-auction.model';
import { YugiohListingService } from 'src/app/services/yugioh-listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction-list-item',
  templateUrl: './auction-list-item.component.html',
  styleUrls: ['./auction-list-item.component.css']
})
export class AuctionListItemComponent {

  featuredListing: YuGiOhCardListing;

  constructor(private messageService: MessageService, listingService: YugiohListingService, private router: Router) {
    this.featuredListing = listingService.getAuctionListing();
   }

  showSavedToastMessage() {
    this.messageService.add({ severity: 'info', summary: 'Saved!', detail: 'Auction added to your saved list!' });
  }

  navigateToSellerProfile() {
    this.router.navigate(['user-profile']);
  }

}

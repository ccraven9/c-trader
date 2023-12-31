import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { YuGiOhCardListing } from 'src/app/models/yugioh-auction.model';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {

  @Input() featuredListing!: YuGiOhCardListing;

  constructor(private router: Router) {}

  navigateToAuction() {
    this.router.navigate(['auction']);
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {

  constructor(private router: Router) {}

  listingTitle = '';
  setPrefix = '';
  totalBids = 0;
  currentPrice = 0.0;
  timeRemaining: string = "";
  imageArt: string= "";
  description = "";

  navigateToAuction() {
    this.router.navigate(['auction']);
  }

}

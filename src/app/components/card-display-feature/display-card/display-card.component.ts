import { Component } from '@angular/core';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {

  listingTitle = '';
  setPrefix = '';
  totalBids = 0;
  currentPrice = 0.0;
  timeRemaining: string = "";
  imageArt: string= "";
  description = "";

}

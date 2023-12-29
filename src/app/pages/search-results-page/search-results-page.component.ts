import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent {

  constructor( private router: Router ) {}

  products = [
    {
      listingTitle: 'Blue Eyes White Dragon',
      setPrefix: 'SDK-001',
      totalBids: 23,
      timeRemaining: 5,
      imageArt: 'assets\BlueEyesWhiteDragon-MAMA-EN-URPR-1E.webp',
      currentPrice: 24.50,
      previewDescription: 'This is a mint condition Blue Eyes from SDK-001.',
      condition: 'Mint Condition'
    },
    {
      listingTitle: 'Blue Eyes White Dragon',
      setPrefix: 'SDK-001',
      totalBids: 23,
      timeRemaining: 5,
      imageArt: 'assets\BlueEyesWhiteDragon-MAMA-EN-URPR-1E.webp',
      currentPrice: 24.50,
      previewDescription: 'This is a mint condition Blue Eyes from SDK-001.',
      condition: 'Mint Condition'

    },
    {
      listingTitle: 'Blue Eyes White Dragon',
      setPrefix: 'SDK-001',
      totalBids: 23,
      timeRemaining: 5,
      imageArt: 'assets\BlueEyesWhiteDragon-MAMA-EN-URPR-1E.webp',
      currentPrice: 24.50,
      previewDescription: 'This is a mint condition Blue Eyes from SDK-001.',
      condition: 'Mint Condition'

    },
    {
      listingTitle: 'Blue Eyes White Dragon',
      setPrefix: 'SDK-001',
      totalBids: 23,
      timeRemaining: 5,
      imageArt: 'assets\BlueEyesWhiteDragon-MAMA-EN-URPR-1E.webp',
      currentPrice: 24.50,
      previewDescription: 'This is a mint condition Blue Eyes from SDK-001.',
      condition: 'Mint Condition'

    },
    {
      listingTitle: 'Blue Eyes White Dragon',
      setPrefix: 'SDK-001',
      totalBids: 23,
      timeRemaining: 5,
      imageArt: 'assets\BlueEyesWhiteDragon-MAMA-EN-URPR-1E.webp',
      currentPrice: 24.50,
      previewDescription: 'This is a mint condition Blue Eyes from SDK-001.',
      condition: 'Mint Condition'

    },
    {
      listingTitle: 'Blue Eyes White Dragon',
      setPrefix: 'SDK-001',
      totalBids: 23,
      timeRemaining: 5,
      imageArt: 'assets\BlueEyesWhiteDragon-MAMA-EN-URPR-1E.webp',
      currentPrice: 24.50,
      previewDescription: 'This is a mint condition Blue Eyes from SDK-001.',
      condition: 'Mint Condition'
    },]

    navigateToAuction() {
      this.router.navigate(['auction'])
    }

}

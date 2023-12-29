import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {

  constructor(private router: Router) {}

  navigateToAuction() {
    this.router.navigate(['auction']);
  }

}

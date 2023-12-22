import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-header',
  templateUrl: './search-bar-header.component.html',
  styleUrls: ['./search-bar-header.component.css']
})
export class SearchBarHeaderComponent {
  constructor( private router: Router ) {}

  navigateToSellPage(){
    this.router.navigate(['sell']);
  }

  navigateToSignUpPage(){
    this.router.navigate(['signup']);
  }

  navigateToHomePage(){
    this.router.navigate(['/']);
  }
}

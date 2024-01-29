import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-search-bar-header',
  templateUrl: './search-bar-header.component.html',
  styleUrls: ['./search-bar-header.component.css']
})
export class SearchBarHeaderComponent {

  signInSubscription: Subscription;
  signedIn = false;
  items =   [
    {
        label: 'User',
        items: [
            {
                label: 'Profile',
                icon: 'pi pi-refresh',
                command: () => {
                    // this.update();
                }
            },
            {
                label: 'Saved List',
                icon: 'pi pi-times',
                command: () => {
                    // this.delete();
                }
            }
        ]
    },
    {
        label: 'Logout',
        items: [
            {
                label: 'Logout',
                icon: 'pi pi-external-link',
                url: 'http://angular.io'
            },
            // {
            //     label: 'Router',
            //     icon: 'pi pi-upload',
            //     routerLink: '/fileupload'
            // }
        ]
    }
];


  constructor( private router: Router, private signInService: SignInService ) {
   this.signInSubscription = signInService.getIsLoggedInSubject().subscribe(
      signedInStatus => {
        this.signedIn = signedInStatus;
      }
    );
  }

  navigateToSellPage(){
    this.router.navigate(['sell']);
  }

  navigateToSignUpPage(){
    this.router.navigate(['signup']);
  }

  navigateToHomePage(){
    this.router.navigate(['/']);
  }

  navigateToSearchResultsPage(){
    this.router.navigate(['search-results']);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private isLoggedIn = false;
  private isLoggedInSubject: BehaviorSubject<boolean>

  constructor() {
    this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
   }

  signInUser(username: string, password: string) {
    const usrName = username;
    const userPass = password;
    if(this.validateUser(usrName, userPass)) {
      this.isLoggedIn = true;
    }
  }

  validateUser(username: string, password: string) {
    if (username.length > 0 && password.length > 0) {
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  getIsLoggedInSubject(): BehaviorSubject<boolean> {
    return this.isLoggedInSubject;
  }
}

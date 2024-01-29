import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  bannedUsernameList = ['admin'];

  constructor() { }

  signupNewUser(email: string, username: string, password: string) {
    if (this.isUsernameAllowed(username)) {
      console.log('New User was created!')
      //mock submit to database.
    }
  }

  isUsernameAllowed(username: string): boolean {
    if (this.bannedUsernameList.includes(username)) {
      return false;
    }
    return true;
  }




}

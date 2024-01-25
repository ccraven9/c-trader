import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  bannedUsernameList = ['admin'];

  constructor() { }

  signupNewUser(email: string, username: string, password:string) {
    console.log('New user signed up with username:', username)
  }

  checkUsername(username: string) {
    if( this.bannedUsernameList.includes(username)) {

    }
  }
  



}

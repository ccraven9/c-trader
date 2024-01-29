import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserById(userId: string): User | null {
    //Mock searching user
    if (userId?.length > 0) {
      let user: User = {
        userId: 'aE123',
        username: 'CardCollector24',
        email: 'jerry@email.com',
        profileImage: '',
        feedbackRating: 99
      };
      return user;
    }
    return null;
  }
}

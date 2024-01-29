import { Injectable } from '@angular/core';
import { SellerDetails } from '../models/seller-details.model';

@Injectable({
  providedIn: 'root'
})
export class SellerDetailsService {

  constructor() { }

  getSellerDetailsByUserId(userId: string): SellerDetails | null {
    //Mock searching a seller
    if(userId?.length > 0) {
      let seller: SellerDetails = {
        userId: 'asd24',
        profileName: 'Yug_45',
        feedbackRating: 92
      }; 
      return seller;
    }
    return null;
  }
}

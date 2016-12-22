import { Injectable } from '@angular/core';

import { Restaurant } from '../contracts/restaurant';
import { RESTAURANTS } from './mock-restaurants';

@Injectable()
export class RestaurantService {

  getPopularRestaurants(latitude: number, longitude: number): Promise<Restaurant[]> {
    return Promise.resolve(RESTAURANTS.slice(0,4));
  }
}
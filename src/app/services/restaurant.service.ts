import { Injectable } from '@angular/core';

import { Restaurant } from '../restaurant/restaurant';
import { RESTAURANTS } from './mock-restaurants';

@Injectable()
export class RestaurantService {

  getTrendingRestaurants(latitude: number, longitude: number): Promise<Restaurant[]> {
    return Promise.resolve(RESTAURANTS);
  }
}
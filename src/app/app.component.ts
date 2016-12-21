import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant'

import { RestaurantService } from './services/restaurant.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestaurantService]
})
export class AppComponent {
  trendingRestaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) { }

  getTopRestaurants(): void {
    this.restaurantService.getTrendingRestaurants().then(restaurants => this.trendingRestaurants = restaurants);
  }

  ngOnInit(): void {
    this.getTopRestaurants();
  }
}

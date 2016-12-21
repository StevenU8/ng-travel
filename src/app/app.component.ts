import { Component, OnInit, OnChanges } from '@angular/core';
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
  location = { };  

  constructor(private restaurantService: RestaurantService) { }

  getTopRestaurants(position): void {
    this.location = position.coords;
    this.restaurantService.getTrendingRestaurants(position.coords.latitude, position.coords.longitude).then(restaurants => this.trendingRestaurants = restaurants);
  }

  ngOnInit(): void {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getTopRestaurants.bind(this));
      };
  }
}

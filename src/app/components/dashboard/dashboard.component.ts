import { Component, OnInit, OnChanges } from '@angular/core';
import { Restaurant } from '../../restaurant/restaurant'
import { RestaurantService } from '../../services/restaurant.service'

@Component({
    moduleId: 'module.id',
    selector: 'my-app',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    styleUrls: ['app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  trendingRestaurants: Restaurant[];
  location = { };  

  constructor(private restaurantService: RestaurantService) { }

  getTopRestaurants(position): void {
    this.location = position.coords;
    this.restaurantService.getPopularRestaurants(position.coords.latitude, position.coords.longitude).then(restaurants => this.trendingRestaurants = restaurants);
  }

  ngOnInit(): void {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getTopRestaurants.bind(this));
      };
  }
}

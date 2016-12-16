import { Component } from '@angular/core';


export class Restaurant {
  id: string;
  name: string;
  imageUrl: string;
}

const RESTAURANTS: Restaurant[] = [
  { id: 'restaurant-1', name: 'Restaurant 1', imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/xtqi3PdiT8u_Q3POr8HY5g/258s.jpg' },
  { id: 'restaurant-2', name: 'Restaurant 2', imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/sEVmjwbp2XOCEqPDc1jBzw/258s.jpg' },
  { id: 'restaurant-3', name: 'Restaurant 3', imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/0GdASuBGoh3hHJSIkjHSvw/258s.jpg' },
  { id: 'restaurant-4', name: 'Restaurant 4', imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/4QuySIzlRQi4kGsCOAD80w/258s.jpg' },
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trendingRestaurants = RESTAURANTS;
}

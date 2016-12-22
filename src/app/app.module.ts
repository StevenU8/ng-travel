import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent} from './components/dashboard/dashboard.component'

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { RestaurantService } from './services/restaurant.service'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    AppRoutingModule
  ],
  providers: [ RestaurantService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

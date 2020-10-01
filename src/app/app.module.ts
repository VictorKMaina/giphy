import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TrendingHomepageComponent } from "./components/trending-homepage/trending-homepage.component";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchBarComponent,
    TrendingHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

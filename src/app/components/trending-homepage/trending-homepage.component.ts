import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { query } from '@angular/animations';

@Component({
  selector: 'app-trending-homepage',
  templateUrl: './trending-homepage.component.html',
  styleUrls: ['./trending-homepage.component.css']
})
export class TrendingHomepageComponent implements OnInit {

  

  trendingGifs: Array<any>;

  apiData = {
    apiKey: "PnZyg1ErQAI15mL1hwG64DS2tfRHtHR6",
    limit: 50,
    rating: "pg-13",
  }
  link = `https://api.giphy.com/v1/gifs/trending?api_key=${this.apiData.apiKey}&limit=${this.apiData.limit}&rating=${this.apiData.rating}`

  constructor(private http: HttpClient) { }

  ngOnInit() {
    setTimeout(() => {
      this.http.get(this.link).subscribe(data => {
        this.trendingGifs = data.data;
      })
    }, 1000)

  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  results;

  constructor(private http: HttpClient) {}

  // api = {
  //   api_key: "PnZyg1ErQAI15mL1hwG64DS2tfRHtHR6",
  //   q: "laughing",
  //   limit: 10
  // };

  ngOnInit() {
  //   this.http.get(`http://api.giphy.com/v1/gifs/search?q=${this.api.q}&api_key=${this.api.api_key}&limit=${this.api.limit}`).subscribe(data => {
  //     this.results = data;
  //   })
  }
}

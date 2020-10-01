import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetTrendingService } from 'src/app/services/get-trending.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trendingGifs = [];

  constructor(private http: HttpClient, public trendRow: GetTrendingService) { }

  ngOnInit() {
    this.trendRow.addRow(this.trendingGifs);
  }
}
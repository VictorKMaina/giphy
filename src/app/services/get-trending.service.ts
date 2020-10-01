import { Injectable } from '@angular/core';
import { TrendingEndpoint, Trending } from '../classes/trending'
import { HttpClient } from "@angular/common/http";
import { ApiKeyService } from "../services/api-key.service";

@Injectable({
  providedIn: 'root'
})
export class GetTrendingService {

  apiData = new TrendingEndpoint(this.apiKey.apiKey, 8);

  constructor(private http: HttpClient, private apiKey: ApiKeyService) { }

  addRow(arr: Array<any>) {
    this.apiData.offset += 8;

    let link = `https://api.giphy.com/v1/gifs/trending?api_key=${this.apiData.apiKey}&limit=${this.apiData.limit}&offset=${this.apiData.offset}`

    this.http.get<Trending>(link).subscribe(data => {
      arr.push(data.data)
    })
  }
}

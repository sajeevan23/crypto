import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { marketData } from 'shared/market-data.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoPriceServiceService {
  private _marketData: marketData[] = [];

  get marketData() {
    return this._marketData;
  }

  set marketData(marketData: marketData[]) {
    this._marketData = marketData;
  } 

  constructor( private httpClient: HttpClient ) {}

  fetchMarketData() {
    const key = 'uyxdwe6j5311uak0b29e5c'
    return this.httpClient.get<{config: any, data: marketData[], usage: any}>(
      'https://api.lunarcrush.com/v2?data=market&key=${key}limit=10&sort=mc&desc=true'
      ).pipe(
        tap(response  => {
          this.marketData =response.data;
        })
      )
  }
}

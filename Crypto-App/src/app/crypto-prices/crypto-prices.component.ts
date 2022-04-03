import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { marketData } from 'shared/market-data.model';
import { CryptoPriceServiceService } from './crypto-price-service.service';

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.scss']
})
export class CryptoPricesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = []

  public marketData: marketData[] = [];

  constructor(private cryptoPriceService: CryptoPriceServiceService) {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }


  ngOnInit(): void {
    this.marketData = this.cryptoPriceService.marketData;

    if (!this.marketData?.length) {
      this.subscriptions.push( this.cryptoPriceService.fetchMarketData().subscribe(()=> {
        this.marketData = this.cryptoPriceService.marketData;
      }));
    }
  }

}

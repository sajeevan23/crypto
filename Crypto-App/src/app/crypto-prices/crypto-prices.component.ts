import { Component, OnInit } from '@angular/core';
import { marketData } from 'shared/market-data.model';
import { CryptoPriceServiceService } from './crypto-price-service.service';

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.scss']
})
export class CryptoPricesComponent implements OnInit {

  public marketData: marketData[] = [];

  constructor(private cryptoPriceService: CryptoPriceServiceService) { }


  ngOnInit(): void {
    this.marketData = this.cryptoPriceService.marketData;

    if (!this.marketData?.length) {
      this.cryptoPriceService.fetchMarketData().subscribe(()=> {
        this.marketData = this.cryptoPriceService.marketData;
      });
    }
  }

}

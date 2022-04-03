import { Component, OnInit } from '@angular/core';
import { CoinOfTheDayService } from './coin-of-the-day.service';

@Component({
  selector: 'app-coin-of-the-day',
  templateUrl: './coin-of-the-day.component.html',
  styleUrls: ['./coin-of-the-day.component.scss']
})
export class CoinOfTheDayComponent implements OnInit {
  coinOfTheDay?:{name: string, symbol: string} = undefined;

  constructor(private coinOfTheDaySeverice: CoinOfTheDayService) { }

  ngOnInit(): void {
  }

}

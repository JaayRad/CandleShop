import { Component, OnInit } from '@angular/core';
import { CandleService } from '../services/candle/candle.service';
import { Candle } from '../shared/models/Candle';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  candles:Candle[] = [];
  constructor(private candleService: CandleService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.candles = this.candleService.getAll().filter(candle => 
        candle.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      else
      this.candles = this.candleService.getAll();
      })

  }

}

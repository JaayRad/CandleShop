import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandleService } from '../services/candle/candle.service';
import { Candle } from '../shared/models/Candle';

@Component({
  selector: 'app-candle-page',
  templateUrl: './candle-page.component.html',
  styleUrls: ['./candle-page.component.css']
})
export class CandlePageComponent implements OnInit {

  candle!:Candle;
  constructor(private activatedRoute:ActivatedRoute) { 
    // activatedRoute.params.subscribe((params) => {
    //   if(params.id)
    //   this.candle = CandleService.getC
    // })
  }

  ngOnInit(): void {
  }

}

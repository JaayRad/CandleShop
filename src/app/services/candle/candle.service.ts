import { Injectable } from '@angular/core';
import { Candle } from 'src/app/shared/models/Candle';

@Injectable({
  providedIn: 'root'
})
export class CandleService {

  constructor() { }

  getFoodById(id:number): Candle{
    return this.getAll().find(candle=> candle.id == id)!;
  }

  getAll():Candle[]{
    return[
      {
        id: 1,
        name:'Mysterious Flowers Candle',
        price:40,
        imageUrl:'/assets/images/candles/candle.jpg',
        smell:'Mysterious Flower',
        waxvolume:150,
      },
      {
        id: 2,
        name:'Wild Flower Candle',
        price:40,
        imageUrl:'/assets/images/candles/candle1.jpg',
        smell:'Wild Flower',
        waxvolume:150,
      },
      {
        id: 3,
        name:'Pear awful Candle',
        price:90,
        imageUrl:'/assets/images/candles/candle2.jpg',
        smell:'Awful Pear ... bleeah',
        waxvolume:50,
      },
      {
        id: 4,
        name:'Christmas Candle',
        price:50,
        imageUrl:'/assets/images/candles/candle3.jpg',
        smell:'Christmas Jazz',
        waxvolume:120,
      },

    ]
  }
}

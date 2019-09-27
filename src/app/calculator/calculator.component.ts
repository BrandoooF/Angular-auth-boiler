import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  //final total
  total = 0.00

  //holds final subtotals
  totals = {
    front: 0,
    back: 0,
    right: 0,
    left: 0
  }
  //holds colors from fields
  colors = {
    front : 0,
    back: 0,
    right: 0,
    left: 0
  }
  //prices for each color per print area
  prices = {
    '1' : 2.00,
    '2' : 1.50,
    '3' : 1.00,
    '4' : .75,
    '5' : .50 
  }

  shirtsPrice = 0

  screenFee = 0

  constructor() { }

  ngOnInit() {
  }

  updateTotal(printArea: string){
    let ColorCount = this.colors[printArea] //get number of colors in print area
    let subtotal = 0 //temp variable to hold new subtotal for print area

    for(var i=0;i<ColorCount;i++){
      if(i < Object.keys(this.prices).length){
        //if price is less than number of keys in prices object Add accordingly
        subtotal += this.prices[(i+1).toString()]
      }else{
        //if price is greater than or equal to number of keys in prices object Add the last key value
        subtotal += this.prices[(Object.keys(this.prices).length).toString()]
      }
    }    

    //Finally, change whole total
    this.total -= this.totals[printArea] //remove old subtotal price
    this.totals[printArea] = subtotal //final result is set as value for that printArea price
    this.total += this.totals[printArea] //then add new subtotal to get final price

  }

  updateShirtPrice(price: number){
    this.total -= this.shirtsPrice
    this.total += price
  }

}

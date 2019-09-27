import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shirt-calculator',
  templateUrl: './shirt-calculator.component.html',
  styleUrls: ['./shirt-calculator.component.css']
})
export class ShirtCalculatorComponent implements OnInit {
  adultSizes = [ 
    { size: 'xs', quantity: 0, price: 0},
    { size: 'sm', quantity: 0, price: 0},
    { size: 'md', quantity: 0, price: 0},
    { size: 'lg', quantity: 0, price: 0},
    { size: 'xl', quantity: 0, price: 0},
    { size: '2x', quantity: 0, price: 0},
    { size: '3x', quantity: 0, price: 0},
    { size: '4x', quantity: 0, price: 0},
    { size: '5x', quantity: 0, price: 0},
    { size: '6x', quantity: 0, price: 0},  
  ]
  youthSizes = [ 
    { size: 'xs', quantity: 0, price: 0},
    { size: 'sm', quantity: 0, price: 0},
    { size: 'md', quantity: 0, price: 0},
    { size: 'lg', quantity: 0, price: 0},
    { size: 'xl', quantity: 0, price: 0},
    { size: '2x', quantity: 0, price: 0},
  ]

  total = 0

  adultPrices

  constructor() { }

  ngOnInit() {
  }

}

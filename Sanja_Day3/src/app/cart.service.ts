import { Injectable } from '@angular/core';
import { IPets } from './IPets';

@Injectable({
  providedIn: 'root'
})
export class CartService {//it is holding the functionality of web-page
  cart: Array<IPets> = []; //cart is empty Array for holding objects
  constructor() { }
  addToCart(pet: IPets){
    this.cart.push(pet);
  }
  getCart(){
  return this.cart;
  }
  clearCart(){
  this.cart = [];
  return this.cart;
  }
}
 
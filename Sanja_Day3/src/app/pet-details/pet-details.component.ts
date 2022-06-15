import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; // added
import { pets } from '../pets';
import { IPets } from '../IPets';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
pet: IPets = {} as IPets; //have to define a property: as IPets, pet-choise whatever name
  constructor(private route: ActivatedRoute, private CS : CartService) { } //we need to create from the ActivatedRoute a class and a property in order to use it
 id: number = 0; //property that will hold the value that will be taken from url
  addToCart(){
    window.alert('Added to cart'); //or without window
    this.CS.addToCart(this.pet);
  }
 ngOnInit(): void {
    // console.log('Hello');
    this.route.params.subscribe((params: Params) => {
    this.id = +params["petId"]; // if you want to be shoure that is a number + == Number()
    //petId is coming from app.routing
    // console.log(this.id);
      this.pet = pets[this.id];  
    })
  }

}

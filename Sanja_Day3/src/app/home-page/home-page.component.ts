import { Component, OnInit } from '@angular/core';
import { pets } from '../pets';
import { IPets } from '../IPets';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // pets: IPets[] = pets;

  constructor() { }

  ngOnInit(): void {
  }
}

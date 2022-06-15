import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  heroTitle: string = "We are your ultimate Pet-Friend provider";
  heroText: string = "With hundreds of pets offered, we are your natural choice for finding life friend!";
  heroBtnText: string = "Learn More";
}

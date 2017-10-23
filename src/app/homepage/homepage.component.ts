import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
})
export class HomepageComponent implements OnInit {
  public myInterval: number = 3000;
  public slides: any[] = [
    `assets/images/shoppingbegins.jpg`,
    `assets/images/womenswear.jpg`,
    `assets/images/menswear.jpg`

  ];
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;
  public noPauseSlides:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

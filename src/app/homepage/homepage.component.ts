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
    `assets/images/background1.jpg`,
    `assets/images/backround2.jpg`,
    `assets/images/backround3.jpg`

  ];
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;
  public noPauseSlides:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

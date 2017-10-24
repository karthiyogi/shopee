import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [{provide: CarouselConfig, useValue: {interval: 1500, noPause: true}}]
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public myInterval: number = 3000;
  public slides: any[] = [
    `assets/images/shoppingbegins.jpg`,
    `assets/images/womenswear.jpg`,
    `assets/images/menswear.jpg`

  ];
  public activeSlideIndex: number = 0;
  public noWrapSlides:boolean = false;
  public noPauseSlides:boolean = false;
  
   public items: string[] = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];
 
  public onHidden(): void {
    console.log('Dropdown is hidden');
  }
  public onShown(): void {
    console.log('Dropdown is shown');
  }
  public isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
  // public constructor() {
  //   // for (let i = 0; i < 4; i++) {
  //   //   this.addSlide();
  //   // }
  // }
 
  // public addSlide(): void {
  //   this.slides.push({
  //     image: `assets/images/5.jpg`
  //   });
  // }
 
  // public removeSlide(index?: number): void {
  //   const toRemove = index ? index : this.activeSlideIndex;
  //   this.slides.splice(toRemove, 1);
  // }
}

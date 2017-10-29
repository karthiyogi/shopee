import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, CarouselModule, BsDropdownModule, ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListComponent } from './homepage/shopping-list.component';
// import { ShoppingRoutingModule } from './homepage/shopping-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
    // ShoppingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

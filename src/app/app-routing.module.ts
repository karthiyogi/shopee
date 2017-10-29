import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ShoppingListComponent } from './homepage/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      
      { path: 'home', component: HomepageComponent },
      { path: 'products', component: ShoppingListComponent },
      { path: '',redirectTo:'products',pathMatch:'full' },
      { path: '**',redirectTo:'products',pathMatch:'full' }
    ]),
  ],
  declarations: [],
  exports:[ RouterModule]
})
export class AppRoutingModule { }

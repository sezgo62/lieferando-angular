import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasketContainerComponent } from './basket-container/basket-container.component';
import { DishesComponent } from './dishes/dishes.component';
import { ShoppingsComponent } from './shoppings/shoppings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasketContainerComponent,
    DishesComponent,
    ShoppingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

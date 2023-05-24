import { Component, Input, OnInit } from '@angular/core';
import { Dishes } from '../dishes';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {



dishes= new Dishes();

@Input() amount;
@Input() title;
@Input() content;
@Input() menuContent;
@Input() price;



index;
element;

addDish(title, price) {
    
  for (let i = 0; i < this.dishes.basket.length; i++) {
     this.element = this.dishes.basket[i];
    
    debugger;

   this.index = this.dishes.basket[i]['title'].indexOf(title);

if(this.index == 0) {
break;
}
  }

  debugger;


    if(this.index == -1) {

     let shopping = {
        'amount': 1,
        'title': title,
        'price': price
      }

      this.dishes.basket.push(shopping);
      console.log(this.dishes.basket);
    } else {

      this.element['amount'] = this.element['amount'] + 1;
      console.log(this.dishes.basket);
      
    }



}

ngOnInit() {
//renderDishes();
}



}

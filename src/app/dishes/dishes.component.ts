import { Component, Input, OnInit } from '@angular/core';
import { Dishes } from '../dishes';
import { DishesServiceService } from '../dishes-service.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

@Input() title;
@Input() content;
@Input() menuContent;
@Input() price;

constructor(public fs: DishesServiceService) {



  

}



ngOnInit() {
//renderDishes();
}



}

import { Component, Input, OnInit } from '@angular/core';
import { Dishes } from '../dishes';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

dishes= new Dishes();

@Input() title;
@Input() inhalt;
@Input() auswahl;
@Input() preis;



ngOnInit() {
//renderDishes();
}



}

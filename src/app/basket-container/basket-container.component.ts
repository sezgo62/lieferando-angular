import { Component, Input, OnInit } from '@angular/core';
import { DishesServiceService } from '../dishes-service.service';

@Component({
  selector: 'app-basket-container',
  templateUrl: './basket-container.component.html',
  styleUrls: ['./basket-container.component.scss']
})
export class BasketContainerComponent implements OnInit {

  @Input() amount;
  @Input() title;
  @Input() sum;


constructor(public fs: DishesServiceService) {

}


ngOnInit() {

}

}

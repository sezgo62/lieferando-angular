import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.scss']
})
export class ShoppingsComponent {

  @Input() amount;
  @Input() title;
  @Input() sum;

}

import { Component, OnInit } from '@angular/core';
import { Dishes } from './dishes';
import { DishesServiceService } from './dishes-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



constructor(public fs: DishesServiceService) {
            
}

ngOnInit() {

}



}

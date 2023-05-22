import { Component, OnInit } from '@angular/core';
import { Dishes } from './dishes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dishes= new Dishes();

  test = ['1'];


ngOnInit() {

}



}

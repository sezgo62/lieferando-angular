import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishesServiceService {

  constructor() {}


  dishesArray = [
    {
        'title': 'Burger Menu',
        'content': '1 Burger je nach Wahl, 1 Steakhouse Pommes frites, 1 alkoholfreies Getränk 0,33l',
        'menuContent': 'Wahl aus: Chickenburger, der Klassiker, Veggie Burger, Avocado Burger, Bengs Burger und mehr.',
        'price': 13.50,
    },
    {
        'title': 'Chicken Salat',
        'content': 'Mit Hänchenfiletstreifen, gemichten Salat, Tomaten, Gurken, Paprika, Mais, Zwiebeln, und gebratenen Champignons',
        'menuContent': 'Wahl aus: mit Cocktailsauce, mit Essig und Öl, mit Granatapfel sauce, mit Joghurt-Kräuter-Dressing, ohne Dressing und mehr.',
        'price': 9.90,
    },
    {
        'title': 'Greek Salat',
        'content': 'Mit gemischtem Salat, Tomaten, Gruken, Peperoni, Mais, Rucola, Zwiebeln, Oliven und Fetakäse.',
        'menuContent': 'Wahl aus: mit Cocktailsauce, mit Essig und Öl, mit Granatapfelsauce, mit Joghurt-Kräuter-Dressing, ohne Dressing und mehr..',
        'price': 10.90,
    },
        ];

  basket = [
    {
      'amount': 1,
      'title': 'Burger Menu',
      'price': 13.50
    },
    {
      'amount': 1,
      'title': 'zwiebel',
      'price': 12
    },
    {
      'amount': 1,
      'title': 'sucuk',
      'price': 20
    }
  ];

  amount = 'test';
  title;
  content;
  menuContent;
  price;

  index;
  element;

  addDish(title, price) {

    for (let i = 0; i < this.basket.length; i++) {
      this.element = this.basket[i];


      this.index = this.basket[i]['title'].indexOf(title);

      if (this.index == 0) {
        break;
      }
    }



    if (this.index == -1) {

      let shopping = {
        'amount': 1,
        'title': title,
        'price': price
      }

      this.basket.push(shopping);
      console.log(this.basket);
    } else {

      this.element['amount'] = this.element['amount'] + 1;
      console.log(this.basket);
      debugger;

    }


  }

}

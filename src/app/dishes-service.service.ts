import { Injectable, Input, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishesServiceService implements OnInit {

  constructor() {
    for (let s = 0; s < this.basket.length; s++) {
      const element = this.basket[s];

      this.sum += element['price'];
      console.log(this.basket);

    }
  }


  ngOnInit(): void {



  }

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

  @Input() amount;
  @Input() title;
  @Input() content;
  @Input() menuContent;
  @Input() price;
  @Input() sum = 0;


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
    }

    this.sum = 0;

    for (let s = 0; s < this.basket.length; s++) {
      const element = this.basket[s];

      let priceItem = element['price'] * element['amount'];

      this.sum += priceItem;
      console.log(this.basket);
    }

  }

  removeAmount(i) {

    this.basket[i]['amount']--;
    this.sum -= this.basket[i]['price']

    if (this.basket[i]['amount'] == 0) {
      this.basket.splice(i, 1);
    }

    if (this.basket.length <= 0) {
      debugger;

      this.isActive = true;
      //const el = document.querySelector('.payInformationItem');
      //el.className += ' d-none';
    }
  }


  isActive = false
}

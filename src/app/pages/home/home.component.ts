import { Component } from '@angular/core';
import { Game } from 'src/app/shared/components/game-card/game-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public listGames: Game[] = [
    {
      title: 'Play It Now!',
      type: 'Full Game',
      version: 'PS4',
      price: '$59.99',
      image: 'assets/bt-1.jpg',
      cardLabel: 'Exclusive',
    },
    {
      title: 'Buy Now!',
      type: 'Full Game',
      version: 'PS4',
      price: '$59.99',
      image: 'assets/bt-4.jpg',
    },
    {
      title: 'Play It Now!',
      type: 'Digital Game',
      version: 'PS4 | PS3 | PS Vita',
      price: '$14.99',
      image: 'assets/bt-5.jpg',
      cardLabel: 'Exclusive',
    },
  ]
}

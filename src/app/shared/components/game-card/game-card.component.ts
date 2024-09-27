import { Component, Input } from '@angular/core';

export type Game = {
  title: string,
  type: string,
  version: string,
  price: string,
  image: string,
  cardLabel?: string,
}

export const initialGame = {
  title: '',
  type: '',
  version: '',
  price: '',
  image: '',
  cardLabel: '',
}
@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input()
  public game: Game = initialGame;
}

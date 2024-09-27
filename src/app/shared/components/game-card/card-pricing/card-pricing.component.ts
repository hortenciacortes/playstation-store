import { Component, Input } from '@angular/core';
import { Game, initialGame } from '../game-card.component';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss']
})
export class CardPricingComponent {
  @Input()
  public dataGame: Game = initialGame;
}

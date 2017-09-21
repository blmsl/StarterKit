import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';

import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  Direction,
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';
@Component({
  selector: 'app-tinder',
  templateUrl: './tinder.component.html',
  styleUrls: ['./tinder.component.css']
})
export class TinderComponent {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;

  constructor() {

    this.stackConfig = {
      allowedDirections: [
        Direction.LEFT,
        Direction.RIGHT
      ],
      isThrowOut: function() {
        let throwOutConfidence = arguments[3];
        return throwOutConfidence > 0.50;
      },
      minThrowOutDistance: 5000
    };

    this.cards = [
      { name: 'clubs', symbol: '♣', imgURL: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg' },
      { name: 'diamonds', symbol: '♦', imgURL: 'http://c0.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/donald-trump-bankruptcy-lies.jpg?itok=QEd6okhR' },
      { name: 'spades', symbol: '♠', imgURL: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170825070624-01-donald-trump-0823-exlarge-169.jpg' }
    ];
  }

  ngAfterViewInit() {
    // ViewChild & ViewChildren are only available
    // in this function

    console.log(this.swingStack); // this is the stack
    console.log(this.swingCards); // this is a list of cards

    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    console.log(this.swingStack.stack);

    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    this.swingCards.forEach((c) => console.log(c.getCard()));

    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.throwoutleft.subscribe(
      (event: ThrowEvent) => console.log('Manual hook: ', event));
    this.swingStack.throwoutright.subscribe(
      (event: ThrowEvent) => console.log('Manual hook: ', event));

    // this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event.throwOutConfidence));

    // this.swingStack.dragmove.subscribe((event: DragEvent) => console.log(event.throwOutConfidence));
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }


}

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
      minThrowOutDistance: 10000
    };

    this.cards = [
      { name: 'clubs', symbol: '♣', imgURL: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg' },
      { name: 'diamonds', symbol: '♦', imgURL: 'http://c0.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/donald-trump-bankruptcy-lies.jpg?itok=QEd6okhR' },
      { name: 'spades', symbol: '♠', imgURL: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170825070624-01-donald-trump-0823-exlarge-169.jpg' }
    ];
  }

  ngAfterViewInit() {
    this.swingStack.dragmove.subscribe((event: DragEvent) => {
      let like = event.target.querySelector('.like') as HTMLElement;
      let nope = event.target.querySelector('.nope') as HTMLElement;

      if (event.offset > 0) {
        like.style.opacity = event.throwOutConfidence + '';
        nope.style.opacity = 0 + '';

      }
      else {
        nope.style.opacity = event.throwOutConfidence + '';
        like.style.opacity = 0 + '';

      }
    });

    this.swingStack.dragend.subscribe((event: DragEvent) => {
      let like = event.target.querySelector('.like') as HTMLElement;
      let nope = event.target.querySelector('.nope') as HTMLElement;

      like.style.opacity = 0 + '';
      nope.style.opacity = 0 + '';
    });
  }

  // This method is called by hooking up the event
  // on the HTML element - see the template above
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }


}

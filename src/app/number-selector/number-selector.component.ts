import { Component, OnInit } from '@angular/core';
import { times, random } from 'lodash';

@Component({
  selector: 'app-number-selector',
  templateUrl: './number-selector.component.html',
  styleUrls: ['./number-selector.component.scss'],
})
export class NumberSelectorComponent implements OnInit {
  public numbers = times(200).map((t) => random(-100, 100));

  public points = 0;
  public step = 0;
  public leftValue: any = '?';
  public rightValue: any = '?';

  constructor() {}

  ngOnInit(): void {
    console.log(this.numbers);
  }

  get nextValue() {
    const input = this.numbers[this.step];
    const half = input / 2;

    return {
      leftValue: 50 - half,
      rightValue: 50 + half,
    };
  }

  doStep() {
    const input = this.numbers[this.step];
    const half = input / 2;
    this.leftValue = 50 - half;
    this.rightValue = 50 + half;
    this.step++;
  }

  leftClick() {
    if (this.nextValue.leftValue < this.nextValue.rightValue) {
      this.points++;
    }
    this.doStep();
  }

  rightClick() {
    if (this.nextValue.rightValue < this.nextValue.leftValue) {
      this.points++;
    }
    this.doStep();
  }
}

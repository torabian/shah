import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss'],
})
export class WelcomeScreenComponent {
  public finalPayoff = null;

  public form = new FormGroup({
    firstNumber: new FormControl(''),
    secondNumber: new FormControl(''),
  });

  public inValidNumber(no: string) {
    const val = +no;

    if (val === NaN || typeof val !== 'number' || (!val && val !== 0)) {
      return true;
    }

    if (val < 0 || val > 100) {
      return true;
    }

    return false;
  }

  public submit() {
    const form = this.form.value;

    if (
      this.inValidNumber(form.firstNumber) ||
      this.inValidNumber(form.secondNumber)
    ) {
      alert('Sorry :( Both numbers should be between 0-100 to continue');
      return;
    }

    const a = +form.firstNumber;
    const b = +form.secondNumber;

    const average = (a + b) / 2;
    const payoff1 = 1 - 0.05 * (a - (2 / 3) * average);
    const payoff2 = 1 - 0.05 * (b - (2 / 3) * average);

    let totalPayoff = payoff1 + payoff2;

    if (totalPayoff < 0) {
      totalPayoff = 0;
    }

    this.finalPayoff = totalPayoff.toFixed(2);
  }
}

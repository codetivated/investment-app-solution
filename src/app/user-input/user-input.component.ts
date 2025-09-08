import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {InvestmentInput} from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  enteredInitialInvestment = signal('');
  enteredAnnualInvestment = signal('');
  enteredExpectedReturn = signal('');
  enteredDuration = signal('');


  onSubmit() {
  this.calculate.emit({
    initialInvestment: +this.enteredInitialInvestment(),
    annualInvestment: +this.enteredAnnualInvestment(),
    expectedReturn: +this.enteredExpectedReturn(),
    duration: +this.enteredDuration()
  });

  this.resetForm();
}

  resetForm() {
    this.enteredInitialInvestment.set('');
    this.enteredAnnualInvestment.set('');
    this.enteredExpectedReturn.set('');
    this.enteredDuration.set('');
  }

}

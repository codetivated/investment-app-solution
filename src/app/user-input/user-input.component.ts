import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  constructor(private investmentService: InvestmentService) {}

  enteredInitialInvestment = signal('');
  enteredAnnualInvestment = signal('');
  enteredExpectedReturn = signal('');
  enteredDuration = signal('');


  onSubmit() {
  this.investmentService.calculateInvestmentResults({
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

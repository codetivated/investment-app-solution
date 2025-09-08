import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  inputValues = {
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null
  };


  onSubmit() {

    console.log('Initial Investment:', this.inputValues.initialInvestment);
    console.log('Annual Investment:', this.inputValues.annualInvestment);
    console.log('Expected Return:', this.inputValues.expectedReturn);
    console.log('Duration:', this.inputValues.duration);
  }

}

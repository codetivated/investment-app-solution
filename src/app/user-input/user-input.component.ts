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


  enteredInitialInvestment = '';
  enteredAnnualInvestment = '';
  enteredExpectedReturn = '';
  enteredDuration = '';


  onSubmit() {


    console.log('Initial Investment:', this.enteredInitialInvestment);
    console.log('Annual Investment:', this.enteredAnnualInvestment);
    console.log('Expected Return:', this.enteredExpectedReturn);
    console.log('Duration:', this.enteredDuration);
  }

}

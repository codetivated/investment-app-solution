import { Component, signal } from '@angular/core';
import type { InvestmentResults } from './investment-output.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData = signal<InvestmentResults[] | undefined>(undefined);




}

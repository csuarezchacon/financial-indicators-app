import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent {
  @Input() currIndicator: string = "";
  @Input() currIndicatorList: any;

  constructor() {
    console.log(this.currIndicatorList);
    
  }
}

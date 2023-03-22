import { Component } from '@angular/core';
import { IndicatorsService } from '../../services/indicators/indicators.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css']
})
export class IndicatorsComponent {
  indicators = [
    { id: 'dolar', name: 'Dólar', respProp: 'Dolares' },
    { id: 'euro', name: 'Euro', respProp: 'Euros'  },
    { id: 'ipc', name: 'IPC', respProp: 'IPCs'  },
    { id: 'uf', name: 'UF', respProp: 'UFs'  },
    { id: 'utm', name: 'UTM', respProp: 'UTMs'  }
  ]

  currIndicator: string = ""
  currIndicatorList: any;

  constructor(private indicatorService: IndicatorsService) {

  }

  getIndicators(indicator: string) {
    console.log(`Valor ingresado en getIndicators: ${indicator}`);
    this.currIndicator = indicator;
    indicator === 'ipc' || indicator === 'utm' ? this.getIndicatorsByYear(indicator) : this.getIndicatorsByMonth(indicator)
  }

  getIndicatorsInfo(indicator: string) {
    console.log(`Valor ingresado en getIndicatorsInfo: ${indicator}`);
    this.currIndicator = indicator;
    indicator === 'ipc' || indicator === 'utm' ? this.getIndicatorsInfoYear(indicator) : this.getIndicatorsInfoDays(indicator)
  }

  getIndicatorsByMonth(indicator: string) {
    console.log('Getting Indicators by Month: ' + indicator);
    this.currIndicatorList = this.indicatorService.getIndicatorsByMonth(indicator).subscribe(data => console.log(data))
    return this.currIndicatorList;
  }

  getIndicatorsByYear(indicator: string) {
    console.log('Getting Indicators by Year: ' + indicator);
    this.currIndicatorList = this.indicatorService.getIndicatorsByYear(indicator).subscribe(data => console.log(data))
    return this.currIndicatorList;
  }

  getIndicatorsInfoDays(indicator: string) {
    console.log('Getting Indicators Info last 10 days: ' + indicator);
    this.currIndicatorList = this.indicatorService.getIndicatorsInfoDays(indicator).subscribe(data => console.log(data))
    return this.currIndicatorList;
  }

  getIndicatorsInfoYear(indicator: string) {
    console.log('Getting Indicators Info las 12 months: ' + indicator);
    this.currIndicatorList = this.indicatorService.getIndicatorsInfoYear(indicator).subscribe(data => console.log(data))
    return this.currIndicatorList;
  }
}

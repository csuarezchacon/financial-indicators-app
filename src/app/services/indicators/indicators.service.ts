import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentGlobal } from '../../app.component-global'

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  constructor(private http: HttpClient) {
    console.log('Indicators Service call');
  }

  getIndicatorsByMonth(indicator: string) {
    let year: string = new Date().getFullYear().toString();
    let month: string = (new Date().getMonth() + 1).toString().padStart(2, '0');
    let uri: string = `https://api.sbif.cl/api-sbifv3/recursos_api/${indicator}/${year}/${month}?apikey=${ComponentGlobal.apikey}&formato=json`;

    return this.http.get(uri);
  }

  getIndicatorsByYear(indicator: string) {
    let year: string = new Date().getFullYear().toString();
    let uri: string = `https://api.sbif.cl/api-sbifv3/recursos_api/${indicator}/${year}?apikey=${ComponentGlobal.apikey}&formato=json`;

    return this.http.get(uri);
  }

  getIndicatorsInfoDays(indicator: string) {
    let date_i: Date = new Date(new Date().setDate(new Date().getDate() - 10))
    let date_f: Date = new Date()

    let year_i:string = date_i.getFullYear().toString();
    let month_i:string = (date_i.getMonth() + 1).toString().padStart(2, '0');
    let day_i:string = date_i.getDate().toString().padStart(2, '0');

    let year_f:string = date_f.getFullYear().toString();
    let month_f:string = (date_f.getMonth() + 1).toString().padStart(2, '0');
    let day_f:string = date_f.getDate().toString().padStart(2, '0');

    let uri: string = `https://api.sbif.cl/api-sbifv3/recursos_api/${indicator}/periodo/${year_i}/${month_i}/dias_i/${day_i}/${year_f}/${month_f}/dias_f/${day_f}?apikey=${ComponentGlobal.apikey}&formato=json`;
    return this.http.get(uri);
  }

  getIndicatorsInfoYear(indicator: string) {
    let date_i: Date = new Date(new Date().setDate(new Date().getDate() - 365))
    let date_f: Date = new Date()

    let year_i:string = date_i.getFullYear().toString();
    let month_i:string = (date_i.getMonth() + 1).toString().padStart(2, '0');

    let year_f:string = date_f.getFullYear().toString();
    let month_f:string = (date_f.getMonth() + 1).toString().padStart(2, '0');

    let uri: string = `https://api.sbif.cl/api-sbifv3/recursos_api/${indicator}/periodo/${year_i}/${month_i}/${year_f}/${month_f}?apikey=${ComponentGlobal.apikey}&formato=json`;
    return this.http.get(uri);
  }
}

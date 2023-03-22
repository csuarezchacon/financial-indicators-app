import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Route } from '@angular/router'

import { AppComponent } from './app.component';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { IndicatorComponent } from './components/indicator/indicator.component';

import { IndicatorsService } from './services/indicators/indicators.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Route[] = [
  { path: '', component: IndicatorsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    IndicatorsComponent,
    IndicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [IndicatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCheckboxModule, MatBadgeModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule,
  MatSelectModule, MatRadioModule, MatCardModule, MatSnackBarModule, MatAutocompleteModule} from '@angular/material';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { WINDOW_PROVIDERS } from './window.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';


import { IdeasCarouselComponent } from './ideas-carousel/ideas-carousel.component';

import { NguCarouselModule } from '@ngu/carousel';
import {ChartsComponent} from './charts/charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import {GoTopButtonModule} from 'ng2-go-top-button';
import { FooterComponent } from './footer/footer.component';
import { PlantComponent } from './plant/plant.component';
import { TimelapseComponent } from './timelapse/timelapse.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideshowComponent,
    FormComponent,
    AboutComponent,
    IdeasCarouselComponent,
    LineChartComponent,
    PieChartComponent,
    ChartsComponent,
    FooterComponent,
    PlantComponent,
    TimelapseComponent
  ],
  imports: [
    NguCarouselModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SlideshowModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    HttpClientModule,
    MDBBootstrapModule,
    MatCheckboxModule,
    MatBadgeModule,
    FontAwesomeModule,
    GoTopButtonModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }

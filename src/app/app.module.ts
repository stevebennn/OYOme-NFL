import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Store,provideStore} from '@ngrx/store';

import { AppComponent } from './app.component';


import {productModel} from './product.model';
import { StepsService } from './steps.service';
import { FigureComponent } from './figure/figure.component';
import { FigureFeatureViewComponent } from './figure-feature-view/figure-feature-view.component';

import { product } from './product';

@NgModule({
  declarations: [
    AppComponent,
    FigureComponent,
    FigureFeatureViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StepsService,provideStore({product})],
  bootstrap: [AppComponent]
})
export class AppModule {
    // product: any;
    constructor(private _store : Store<any>) {
      if(window.localStorage.length < 1) {
        window.localStorage.setItem('model', JSON.stringify(productModel));
      }
    }

    onInit() {
    }

 }

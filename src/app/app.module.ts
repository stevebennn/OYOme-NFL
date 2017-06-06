import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Store,provideStore, StoreModule} from '@ngrx/store';

// top level app component
import { AppComponent } from './app.component';

// custom application components
import { FigureComponent } from './figure/figure.component';
import { FigureFeatureViewComponent } from './figure-feature-view/figure-feature-view.component';
import { PackagingComponent } from './packaging/packaging.component';
// service to provide steps and available options
import { StepsService } from './steps.service';

// data model for the product
import { productModel } from './product.model';

// product reducer
import { product } from './product';

@NgModule({
  declarations: [
    AppComponent,
    FigureComponent,
    FigureFeatureViewComponent,
    PackagingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StepsService,provideStore({product})],
  bootstrap: [AppComponent]
})
export class AppModule {}

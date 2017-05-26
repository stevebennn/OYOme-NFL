import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StepsService } from './steps.service';
import { FigureComponent } from './figure/figure.component';
import { FigureFeatureViewComponent } from './figure-feature-view/figure-feature-view.component';

import { DataModelService } from './data-model.service';

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
  providers: [StepsService,DataModelService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private dataModelService: DataModelService) {
        if(!window.localStorage.getItem('model')) {
            this.dataModelService.setInitialState(this.dataModelService.initialState)  
        }
    }
  
 }

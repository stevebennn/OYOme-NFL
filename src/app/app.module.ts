import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StepsService } from './steps.service';
import { FigureComponent } from './figure/figure.component';

@NgModule({
  declarations: [
    AppComponent,
    FigureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StepsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FigureComponent } from '../figure/figure.component';

@Component({
  selector: 'app-figure-feature-view',
  templateUrl: './figure-feature-view.component.html',
  styleUrls: ['./figure-feature-view.component.scss']
})
export class FigureFeatureViewComponent extends FigureComponent {

  // when extending a class you need to include the super call
  constructor() { super(); }

  ngOnInit() {
  }

}

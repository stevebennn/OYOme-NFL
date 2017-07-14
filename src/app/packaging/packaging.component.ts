import { Component, OnInit, Input } from '@angular/core';
import { FigureComponent } from '../figure/figure.component';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.scss']
})
export class PackagingComponent extends FigureComponent {

  constructor() { super(); }

  ngOnInit() {
  }

  @Input() fullname;
  @Input() message;
  @Input() position;

}

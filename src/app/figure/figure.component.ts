import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() skintone: string;
  @Input() team: string;
  @Input() eyes: string;
  @Input() eyeAccessory: string;
  @Input() eyebrows: string;
  @Input() eyebrowColor: string;
  @Input() hairColor: string;
  @Input() jerseyNumber: string;
  @Input() nose: string;
  @Input() noseAccessory: string;
  @Input() mouth: string;
  @Input() mouthAccessory: string;


}

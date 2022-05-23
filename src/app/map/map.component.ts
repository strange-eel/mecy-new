import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public layerType: string;
  ngOnInit(): void {
      this.layerType = 'OSM';
  }
}
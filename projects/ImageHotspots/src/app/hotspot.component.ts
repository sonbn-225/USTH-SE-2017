import { Component } from '@angular/core';
import { ImageHotspotsComponent } from './image.hotspots.component';

@Component ({
  selector: 'hotspot',
  templateUrl: './hotspot.component.html',
  styleUrls: [ './hotspot.component.css' ]
})
export class HotspotComponent {
  public visible = false;

  constructor(
    public id: number,
    public color: String,
    public parent: ImageHotspotsComponent
  ) {
  }
  onClickHotspot(): void {
    if (this.visible){
      this.hidePopup();
    } else {
      this.showPopup();
    }
  }

  hidePopup(): void {

  }

  showPopup(): void {

  }
}

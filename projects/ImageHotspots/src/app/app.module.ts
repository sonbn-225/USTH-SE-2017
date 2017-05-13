import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HotspotComponent } from './hotspot.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    HotspotComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

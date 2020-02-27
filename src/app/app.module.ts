import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdinaryCSSComponent } from './ordinary-css/ordinary-css.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdinaryCSSComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

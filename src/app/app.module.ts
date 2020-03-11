import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlignmentExampleComponent } from './alignment-example/alignment-example.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AlignmentExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

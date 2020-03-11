import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlignmentExampleComponent } from './alignment-example/alignment-example.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsivenessExampleComponent } from './responsiveness-example/responsiveness-example.component';


@NgModule({
  declarations: [
    AppComponent,
    AlignmentExampleComponent,
    ResponsivenessExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlignmentExampleComponent } from './alignment-example/alignment-example.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResponsivenessFlexboxComponent } from './responsiveness-flexbox/responsiveness-flexbox.component';
import { ResponsivenessTediousComponent } from './responsiveness-tedious/responsiveness-tedious.component';


@NgModule({
  declarations: [
    AppComponent,
    AlignmentExampleComponent,
    ResponsivenessTediousComponent,
    ResponsivenessFlexboxComponent,
    HomeComponent
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

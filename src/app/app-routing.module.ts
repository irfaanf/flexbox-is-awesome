import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlignmentExampleComponent } from './alignment-example/alignment-example.component';
import { AppComponent } from './app.component';
import { ResponsivenessTediousComponent } from './responsiveness-tedious/responsiveness-tedious.component';
import { ResponsivenessFlexboxExampleComponent } from './responsiveness-flexbox-example/responsiveness-flexbox-example.component';

const routes: Routes = [
  { path: 'alignment', component: AlignmentExampleComponent },
  { path: 'responsiveness-tedious', component: ResponsivenessTediousComponent },
  { path: 'responsiveness-flexbox', component: ResponsivenessFlexboxExampleComponent },
  { path: '', component: AppComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

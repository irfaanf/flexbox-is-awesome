import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlignmentExampleComponent } from './alignment-example/alignment-example.component';
import { HomeComponent } from './home/home.component';
import { ResponsivenessFlexboxExampleComponent } from './responsiveness-flexbox-example/responsiveness-flexbox-example.component';
import { ResponsivenessTediousComponent } from './responsiveness-tedious/responsiveness-tedious.component';

const routes: Routes = [
  { path: 'alignment', component: AlignmentExampleComponent },
  { path: 'responsiveness-tedious', component: ResponsivenessTediousComponent },
  { path: 'responsiveness-flexbox', component: ResponsivenessFlexboxExampleComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
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

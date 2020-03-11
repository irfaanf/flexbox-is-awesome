import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsiveness-tedious',
  templateUrl: './responsiveness-tedious.component.html',
  styleUrls: ['./responsiveness-tedious.component.css']
})
export class ResponsivenessTediousComponent implements OnInit {

  columns: number;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      '(max-width: 1000px)'
    ]).subscribe(result => {
      this.columns = result.matches ? 1 : 2;
    });
  }

  ngOnInit() {
  }
}

import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsiveness-example',
  templateUrl: './responsiveness-example.component.html',
  styleUrls: ['./responsiveness-example.component.css']
})
export class ResponsivenessExampleComponent implements OnInit {

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

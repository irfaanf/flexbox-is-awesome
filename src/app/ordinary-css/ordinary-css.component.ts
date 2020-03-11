import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordinary-css',
  templateUrl: './ordinary-css.component.html',
  styleUrls: [
    './ordinary-css.component.css',
   './old-approach.css'
  ]
})
export class OrdinaryCSSComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

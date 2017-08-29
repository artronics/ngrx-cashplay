import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'art-app',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <button md-raised-button color="primary">kir</button>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'art';

  constructor() { }

  ngOnInit() {
  }

}

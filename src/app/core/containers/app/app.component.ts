import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'art-app',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

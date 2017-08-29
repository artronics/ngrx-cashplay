import { Component } from '@angular/core';

@Component({
  selector: 'art-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'art';
}

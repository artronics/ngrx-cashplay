import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'art-card',
  template: `
    <md-card class="art-card">
      <md-card-title>{{title}}</md-card-title>
      <md-card-content>
        <ng-content></ng-content>
      </md-card-content>
      <md-card-actions align="end">
        <ng-content select="[card-action]"></ng-content>
      </md-card-actions>
    </md-card>
  `,
  styles: [`
    .art-card {
      margin-bottom: 4px;
    }
  `]
})
export class CardComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}

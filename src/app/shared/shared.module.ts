import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/material';
import { CardComponent } from './card/card.component';

const COMPONENTS = [
  CardComponent,
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserAnimationsModule,
    MdCardModule,
  ],
  exports: COMPONENTS,
})
export class SharedModule {}

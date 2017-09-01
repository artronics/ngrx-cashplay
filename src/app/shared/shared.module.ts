import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdPaginatorModule, MdSortModule, MdTableModule } from '@angular/material';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ResourceService } from './services/resource.service';

const COMPONENTS = [
  CardComponent,
  TableComponent,
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    BrowserAnimationsModule,
    MdCardModule,
    MdTableModule,
    CdkTableModule,
    MdSortModule,
    MdPaginatorModule,
  ],
  exports: COMPONENTS,
  providers: [ResourceService]
})
export class SharedModule {}

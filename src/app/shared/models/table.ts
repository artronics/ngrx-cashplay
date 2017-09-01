import { Column } from './column';
import { Page } from './page';

export interface Table<T> {
  displayedColumns: string[];
  columns: Column<T>[];
  page: Page;
  pageSizeOptions: number[];
}

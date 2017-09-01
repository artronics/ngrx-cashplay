export interface Column<T> {
  id: string;
  text: string;
  extraClasses?: string[] | string;

  cellValue?(row: T): any | string | number | Date;
}

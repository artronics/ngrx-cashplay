import { Column } from '../../shared/models/column';

export interface Customer {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  firstName: string;
  lastName: string;
}

export const columns: Column<Customer>[] = [
  {id: 'id', text: 'ID'},
  {
    id: 'name',
    text: 'Name',
    cellValue: (c) => `${c.firstName} ${c.lastName}`,
    extraClasses: 'art-capitalize',
  },
  {id: 'createdAt', text: 'Created At'},
];

export const displayedColumns = ['id', 'name', 'createdAt'];

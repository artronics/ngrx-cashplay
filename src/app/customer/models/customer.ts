import { Column } from '../../shared/models/column';

export interface Customer {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  firstName: string;
  lastName: string;
}

export const customerSort = function (a: Customer, b: Customer, property: string, direction?): number {
  // const result = BaseResource.Sort(a, b, property, direction);
  // if (result !== 0) {
  //   return result;
  // }

  let propertyA: number | string | Date = '';
  let propertyB: number | string | Date = '';

  switch (property) {
    case 'id':
      [propertyA, propertyB] = [a.id, b.id];
      break;
    case 'createdAt':
      [propertyA, propertyB] = [a.createdAt, b.createdAt];
      break;
    case 'updatedAt':
      [propertyA, propertyB] = [a.createdAt, b.createdAt];
      break;

    case 'name':
      [propertyA, propertyB] = [`${a.firstName} ${a.lastName}`, `${b.firstName} ${b.lastName}`];
      break;
    case 'firstName':
      [propertyA, propertyB] = [a.firstName, b.firstName];
      break;
    case 'lastName':
      [propertyA, propertyB] = [a.lastName, b.lastName];
      break;
  }

  const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
  const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

  return (valueA < valueB ? -1 : 1) * (direction === 'asc' ? 1 : -1);
};


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

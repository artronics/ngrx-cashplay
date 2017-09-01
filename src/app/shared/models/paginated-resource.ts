export interface PaginatedResource<T> {
  page: {
    size: number
    totalElements: number;
    totalPages: number;
    number: number;
  };
  _embedded: { [key: string]: T };
}

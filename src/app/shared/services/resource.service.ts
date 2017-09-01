import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Page } from '../models/page';
import { Observable } from 'rxjs/Observable';
import { PaginatedResource } from '../models/paginated-resource';

@Injectable()
export class ResourceService<T> {
  resourceUrl: string;

  constructor(private api: ApiService) {
  }

  recentlyAdded(page: Page): Observable<PaginatedResource<T[]>> {
    return this.api.get<PaginatedResource<T[]>>(this.resourceUrl, page, {propertyName: 'updatedAt', direction: 'desc'});
  }

}

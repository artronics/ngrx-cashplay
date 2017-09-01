import { Injectable } from '@angular/core';
import { ResourceService } from '../../shared/services/resource.service';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {

  constructor(private resourceService: ResourceService<Customer>) {
  }

}

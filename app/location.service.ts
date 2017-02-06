import { Injectable }   from '@angular/core';

import { Institute }    from './institute';
import { INSTITUTES }   from './mock-institutes';
import { Department }   from './department';
import { DEPARTMENTS }  from './mock-departments';

@Injectable()
export class LocationService {
  getInstitutes(): Promise<Institute[]> {
    return Promise.resolve(INSTITUTES);
  }

  getDepartments(): Promise<Department[]> {
    return Promise.resolve(DEPARTMENTS);
  }

}
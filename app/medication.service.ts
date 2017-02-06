import { Injectable } from '@angular/core';

import { Medication } from './medication';
import { MEDICATIONS } from './mock-medications';

@Injectable()
export class MedicationService {
  
  getMedications(): Promise<Medication[]> {
    return Promise.resolve(MEDICATIONS);
  }

}
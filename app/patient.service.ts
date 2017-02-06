import { Injectable } from '@angular/core';

import { Patient } from './patient';
import { PATIENTS } from './mock-patients';

@Injectable()
export class PatientService {
  
  getPatients(): Promise<Patient[]> {
    return Promise.resolve(PATIENTS);
  }

  /**
   * Gets patient details of an array by its ID
   */
  getPatient(id: number): Promise<Patient> {
    return this.getPatients()
               .then(patients => patients.find(patient => patient.id === id));
  }
}
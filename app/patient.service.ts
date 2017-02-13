import { Injectable }   from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Patient } from './patient';
import { PATIENTS } from './mock-patients';

@Injectable()
export class PatientService {

  private patientsUrl = 'api/patients';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getPatients(): Promise<Patient[]> {
    return this.http.get(this.patientsUrl)
               .toPromise()
               .then(response => response.json().data as Patient[])
               .catch(this.handleError);
  }

  getPatient(id: number): Promise<Patient> {
    const url = `${this.patientsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Patient)
      .catch(this.handleError);
  }

  update(patient: Patient): Promise<Patient> {
  const url = `${this.patientsUrl}/${patient.id}`;
  return this.http
    .put(url, JSON.stringify(patient), {headers: this.headers})
    .toPromise()
    .then(() => patient)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.patientsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
import { Component, OnInit, Input }  from '@angular/core';
import { Router }             from '@angular/router';

import { Institute }          from './institute';
import { Department }         from './department';
import { Patient }            from './patient';
import { PatientService }     from './patient.service';

@Component({
  moduleId: module.id,
  selector: 'my-patients',
  templateUrl: './patients.component.html'
})

export class PatientsComponent implements OnInit {
  patients: Patient[];
  selectedPatient: Patient;
  @Input()
  institute: Institute;
  @Input()
  department: Department;

  constructor(
    private router: Router,
    private patientService: PatientService) { }
  
  /**
   * Gets patients from an institute and a department
   */
  getPatients(): void {
    this.patientService.getPatients()
    .then(patients => this.patients = patients
    .filter(patient => patient.instituteId == this.institute.id && patient.departmentId == this.department.id));
  }

  ngOnInit(): void {
    this.getPatients();
  }

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
    this.router.navigate(['/detail', this.selectedPatient.id]);
  }

}
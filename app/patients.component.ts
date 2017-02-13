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
    private patientService: PatientService) {
      this.selectedPatient = {  id: 0,  firstName: '',  lastName: '',  patientNumber: 0,  gender: '',  birthdate: new Date, instituteId: 0,  departmentId:0};
     }
  
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

  selectPatient(patient: Patient): void {
    this.selectedPatient = patient;
  }

  savePatient(firstName:string, lastName:string, patientNumber:number, gender:string, birthdate: Date){
    this.selectedPatient.firstName = firstName;
    this.selectedPatient.lastName = lastName;
    this.selectedPatient.patientNumber = patientNumber;
    this.selectedPatient.gender = gender;
    this.selectedPatient.birthdate = birthdate;
    this.patientService.update(this.selectedPatient);
  }

  delete(patient: Patient): void {
  this.patientService
      .delete(patient.id)
      .then(() => {
        this.patients = this.patients.filter(p => p !== patient);
      });
  }

}
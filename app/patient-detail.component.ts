import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Patient }                from './patient';
import { PatientService }         from './patient.service';

@Component({
  moduleId: module.id,
  selector: 'my-patient-detail',
  templateUrl: './patient-detail.component.html',
})

export class PatientDetailComponent implements OnInit {
  patient: Patient;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.patientService.getPatient(+params['id']))
      .subscribe(patient => this.patient = patient);
  }

  goBack(): void {
    this.location.back();
  }
}
import { Component, OnInit, Input }  from '@angular/core';

import { Patient }            from './patient';
import { Medication }         from './medication';
import { MedicationService }  from './medication.service';

@Component({
  moduleId: module.id,
  selector: 'my-medications',
  templateUrl: './medications.component.html'
})

export class MedicationsComponent implements OnInit {
  medications: Medication[];
  @Input()
  patientSelected: Patient;
  medicationSelected: Medication;
  
  constructor(
    private medicationService: MedicationService) {
      this.medicationSelected = {id: 0, name: '', dosage: '', time: new Date, remark: '', patientId: 0};
    }

  /**
   * Get medication of a patient by a patient ID
   */
  getMedications(): void {
    this.medicationService.getMedications()
    .then(medications => this.medications = medications
    .filter(medication => medication.patientId == this.patientSelected.id));
  }

  ngOnInit(): void {
    this.getMedications();
  }

  onSelect(medication: Medication): void {
    this.medicationSelected = medication;
  }

  saveRemark(text: string){
    this.medicationSelected.remark = text;
  }

}
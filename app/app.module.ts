import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }           from './app.component';

import { PatientDetailComponent } from './patient-detail.component';
import { PatientsComponent }      from './patients.component';
import { PatientService }         from './patient.service';

import { SearchComponent }        from './search.component';
import { LocationService }        from './location.service';

import { MedicationsComponent }   from './medications.component';
import { MedicationService }      from './medication.service';

import { AppRoutingModule }       from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PatientDetailComponent,
    PatientsComponent,
    SearchComponent,
    MedicationsComponent
  ],
  providers: [ 
    PatientService,
    LocationService,
    MedicationService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
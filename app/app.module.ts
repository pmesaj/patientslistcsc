import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule }     from '@angular/http';

import { AppComponent }           from './app.component';

import { PatientDetailComponent } from './patient-detail.component';
import { PatientsComponent }      from './patients.component';
import { PatientService }         from './patient.service';

import { SearchComponent }        from './search.component';
import { LocationService }        from './location.service';

import { MedicationsComponent }   from './medications.component';
import { MedicationService }      from './medication.service';

import { AppRoutingModule }       from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }   from 'angular-in-memory-web-api';
import { PatientData }            from './patient-data';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(PatientData),
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
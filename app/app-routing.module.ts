import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { PatientsComponent }      from './patients.component';
import { PatientDetailComponent } from './patient-detail.component';
import { SearchComponent }        from './search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'detail/:id', component: PatientDetailComponent },
  { path: 'search',     component: SearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
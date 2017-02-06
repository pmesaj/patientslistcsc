import { Component, OnInit }    from '@angular/core';

import { Institute }            from './institute';
import { Department }           from './department';
import { LocationService }      from './location.service';
import { PatientsComponent }    from './patients.component';

@Component({
  moduleId: module.id,  
  selector: 'my-search-lists',
  templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit {
  selectedInstitute: Institute;
  selectedDepartment: Department;
  institutes: Institute[]; 
  departments: Department[];

  constructor(private locationService: LocationService) {
    this.selectedInstitute = {id: 0, name: '', code: ''};
    this.selectedDepartment = {id: 0, instituteId: 0, name: '', code: ''};
  }
  
  getInstitutes(): void {
    this.locationService.getInstitutes()
        .then(institutes => this.institutes = institutes);
  }

  ngOnInit(): void {
    this.getInstitutes();
  }
  
  /**
   * Gets the departments of an institute
   */
  onSelectInstitute(event: any) {
    if(event.target.value != 0) {
      this.locationService.getDepartments()
        .then(departments => this.departments = departments
        .filter(department => department.instituteId == event.target.value));
        this.selectedDepartment.id = 0;
    }else{
      this.selectedDepartment.id = 0;
    }
  } 

}
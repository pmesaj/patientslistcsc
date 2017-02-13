import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PATIENTS } from './mock-patients';

export class PatientData implements InMemoryDbService {
  createDb() {
    let patients = [
      {id: 1, firstName: 'Michele', lastName: 'Peterson', patientNumber: 654987, gender: 'female', birthdate: new Date(1988, 1, 17), instituteId: 1, departmentId: 1},
  {id: 2, firstName: 'Peter', lastName: 'Rawson', patientNumber: 987665, gender: 'male', birthdate: new Date(1981, 3, 19), instituteId: 1, departmentId: 1},
  {id: 3, firstName: 'Jonh', lastName: 'Ferdinand', patientNumber: 234234, gender: 'male', birthdate: new Date(1982, 5, 25), instituteId: 1, departmentId: 1},
  {id: 4, firstName: 'Beatrice', lastName: 'Walker', patientNumber: 112654, gender: 'female', birthdate: new Date(1984, 6, 5), instituteId: 1, departmentId: 2},
  {id: 5, firstName: 'Carl', lastName: 'Cale', patientNumber: 785412, gender: 'male', birthdate: new Date(1985, 9, 6), instituteId: 1, departmentId: 2},
  {id: 6, firstName: 'Paul', lastName: 'Neville', patientNumber: 234234, gender: 'male', birthdate: new Date(1983, 12, 1), instituteId: 1, departmentId: 2},
  {id: 7, firstName: 'Michele', lastName: 'Peterson', patientNumber: 654987, gender: 'female', birthdate: new Date(1988, 1, 17), instituteId: 1, departmentId: 3},
  {id: 8, firstName: 'Peter', lastName: 'Rawson', patientNumber: 987665, gender: 'male', birthdate: new Date(1981, 3, 19), instituteId: 1, departmentId: 3},
  {id: 9, firstName: 'Jonh', lastName: 'Ferdinand', patientNumber: 234234, gender: 'male', birthdate: new Date(1982, 5, 25), instituteId: 1, departmentId: 3,},
  {id: 10, firstName: 'Beatrice', lastName: 'Walker', patientNumber: 112654, gender: 'female', birthdate: new Date(1984, 6, 5), instituteId: 2, departmentId: 4},
  {id: 11, firstName: 'Carl', lastName: 'Cale', patientNumber: 785412, gender: 'male', birthdate: new Date(1985, 9, 6), instituteId: 2, departmentId: 4},
  {id: 12, firstName: 'Paul', lastName: 'Neville', patientNumber: 234234, gender: 'male', birthdate: new Date(1983, 12, 1), instituteId: 2, departmentId: 4},
  {id: 13, firstName: 'Michele', lastName: 'Peterson', patientNumber: 654987, gender: 'female', birthdate: new Date(1988, 1, 17), instituteId: 2, departmentId: 5},
  {id: 14, firstName: 'Peter', lastName: 'Rawson', patientNumber: 987665, gender: 'male', birthdate: new Date(1981, 3, 19), instituteId: 2, departmentId: 5},
  {id: 15, firstName: 'Jonh', lastName: 'Ferdinand', patientNumber: 234234, gender: 'male', birthdate: new Date(1982, 5, 25), instituteId: 2, departmentId: 5},
  {id: 16, firstName: 'Beatrice', lastName: 'Walker', patientNumber: 112654, gender: 'female', birthdate: new Date(1984, 6, 5), instituteId: 2, departmentId: 6},
  {id: 17, firstName: 'Carl', lastName: 'Cale', patientNumber: 785412, gender: 'male', birthdate: new Date(1985, 9, 6), instituteId: 2, departmentId: 6},
  {id: 18, firstName: 'Paul', lastName: 'Neville', patientNumber: 234234, gender: 'male', birthdate: new Date(1983, 12, 1), instituteId: 2, departmentId: 6},
  {id: 19, firstName: 'Michele', lastName: 'Peterson', patientNumber: 654987, gender: 'female', birthdate: new Date(1988, 1, 17), instituteId: 3, departmentId: 7},
  {id: 20, firstName: 'Peter', lastName: 'Rawson', patientNumber: 987665, gender: 'male', birthdate: new Date(1981, 3, 19), instituteId: 3, departmentId: 7},
  {id: 21, firstName: 'Jonh', lastName: 'Ferdinand', patientNumber: 234234, gender: 'male', birthdate: new Date(1982, 5, 25), instituteId: 3, departmentId: 7},
  {id: 22, firstName: 'Beatrice', lastName: 'Walker', patientNumber: 112654, gender: 'female', birthdate: new Date(1984, 6, 5), instituteId: 3, departmentId: 8},
  {id: 23, firstName: 'Carl', lastName: 'Cale', patientNumber: 785412, gender: 'male', birthdate: new Date(1985, 9, 6), instituteId: 3, departmentId: 8},
  {id: 24, firstName: 'Paul', lastName: 'Neville', patientNumber: 234234, gender: 'male', birthdate: new Date(1983, 12, 1), instituteId: 3, departmentId: 8},
  {id: 25, firstName: 'Michele', lastName: 'Peterson', patientNumber: 654987, gender: 'female', birthdate: new Date(1988, 1, 17), instituteId: 3, departmentId: 9},
  {id: 26, firstName: 'Peter', lastName: 'Rawson', patientNumber: 987665, gender: 'male', birthdate: new Date(1981, 3, 19), instituteId: 3, departmentId: 9},
  {id: 27, firstName: 'Jonh', lastName: 'Ferdinand', patientNumber: 234234, gender: 'male', birthdate: new Date(1982, 5, 25), instituteId: 3, departmentId: 9}
    ];
    return {patients};
  }
}

import { HttpClient } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { defer, of } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { IEmployee } from "./employee.model";

describe("Employee Components", () => {

   let mockHttp = jasmine.createSpyObj("mockHttp", ['delete']);
   mockHttp.delete.and.returnValue(of(true));

   let mockToastr = jasmine.createSpyObj("mockToastr", ['success']);

   let employeeService = new EmployeeService(mockHttp);

   let employeeListComponent;

   beforeEach(() => {
      employeeListComponent = new EmployeeListComponent(employeeService, mockToastr);
   })

   describe("Employee List Component", () => {
      describe("delete", () => {
         it("should remove employee from the list of employees", () => {
            employeeListComponent.employees = [
               <IEmployee>{ id: 1, firstName: 'John' },
               <IEmployee>{ id: 2, firstName: 'Tom' },
               <IEmployee>{ id: 3, firstName: 'Matt' },
            ]
            employeeListComponent.delete(1)

            expect(employeeListComponent.employees.length).toBe(2);
         })
      })
   })
})

describe("Employee Services", () => {
   
   let mockHttp;
   let employeeService: EmployeeService;

   beforeEach(() => {
      mockHttp = jasmine.createSpyObj("mockHttp", ['get']);
      // employeeService = new EmployeeService(mockHttp);
      TestBed.configureTestingModule({
         providers: [
            EmployeeService,
            { provide: HttpClient, useValue: mockHttp }
         ],
      });
      mockHttp = TestBed.inject(HttpClient);
      employeeService = TestBed.inject(EmployeeService);
   })

   it("should return expected employees", () => {
      const expectedEmployees: IEmployee[] = [
         <IEmployee>{id: 1, firstName: 'John'},
         <IEmployee>{id: 2, firstName: 'Tom'}
      ]

      mockHttp.get.and.returnValue(of(expectedEmployees));

      employeeService.getEmployees().subscribe(
         employees => expect(employees).toEqual(expectedEmployees),
         fail 
      )
   })
})
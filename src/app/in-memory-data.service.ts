import { InMemoryDbService } from "angular-in-memory-web-api";
import { IEmployee } from "./employees/employee.model";

export class InMemoryDataService implements InMemoryDbService {
   createDb() {
      const employees = [
         {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@yahoo.com',
            salary: 50000,
            phone: 9874563211
         },
         {
            id: 2,
            firstName: 'Kevin',
            lastName: 'Smith',
            email: 'kev@gamil.com',
            salary: 400000,
            phone: 9874564522
         },
      ];

      return { employees };
   }

   genId(employees: IEmployee[]): number {
      return employees.length > 0 ? Math.max(...employees.map(hero => hero.id)) + 1 : 1
    }
}
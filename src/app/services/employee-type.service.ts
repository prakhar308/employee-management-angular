import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { IEmployeeType } from "../employee-types/employee-type.model";

const httpOptions = {
   headers: new HttpHeaders({
      'Content-Type': 'application/json'
   })
}

@Injectable({
   providedIn: 'root'
})
export class EmployeeTypeService {

   private empoyeeTypeUrl = "http://localhost:5000/api/employee_types";

   constructor(private http: HttpClient) { }

   // GET - get all employee types
   getEmployeeTypes(): Observable<IEmployeeType[]> {
      return this.http.get<IEmployeeType[]>(this.empoyeeTypeUrl)
         .pipe(
            catchError(this.handleError)
         )
   }

   // POST - add new employee type
   addEmployeeType(employeeType: IEmployeeType): Observable<IEmployeeType> {
      return this.http.post<IEmployeeType>(this.empoyeeTypeUrl, employeeType, httpOptions)
         .pipe(
            catchError(this.handleError)
         );
   }

   private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
         // A client-side or network error occurred.
         console.error('An error occurred:', error.error.message);
      } else {
         // Server error
         console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
      }
      return throwError(
         'Something bad happened; please try again later.');
   }
}
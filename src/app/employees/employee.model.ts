export interface IEmployee {
   id: number;
   firstName: string;
   lastName: string;
   gender?: string;
   email: string;
   dob?: Date;
   phone?: string;
   bio?: string;
   employeeTypeId?: number;
}
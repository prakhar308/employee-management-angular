export interface IEmployee {
   id: number;
   firstName: string;
   lastName: string;
   gender?: string;
   email: string;
   dob?: string;
   phone?: string;
   bio?: string;
   employeeType: {
      id: number,
      type: string
   };
}
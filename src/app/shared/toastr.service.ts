import { Injectable } from '@angular/core'

declare let toastr: any

@Injectable({
   providedIn: 'root',
})
export class ToastrService {

   success(message: string, title?: string) {
      toastr.success(message, title, { timeOut: 2000 })
   }

   info(message: string, title?: string) {
      toastr.info(message, title, { timeOut: 2000 })
   }

   warning(message: string, title?: string) {
      toastr.warning(message, title, { timeOut: 2000 })
   }

   error(message: string, title?: string) {
      toastr.error(message, title, { timeOut: 2000 })
   }
}
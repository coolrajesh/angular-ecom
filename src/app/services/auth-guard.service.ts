import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';  
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  
  constructor(private _router: Router,private toaster: ToastrService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
    if (localStorage.getItem('currentUser')) {  
        return true;  
    }else{      
      this.toaster.error('You must have login to access dashboard','');
      this._router.navigate(['']);  
      return false;
    }  
      
}  
}

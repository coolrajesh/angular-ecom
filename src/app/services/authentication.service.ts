import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ApiService } from '../services/api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router,private toastr: ToastrService,private apiService:ApiService) { } 
  
  login(username: string, password: string) {  
    
    this.apiService.apiGet('loginAPI').subscribe(
      res=>{
        console.log(res);        
        const user = res.find((a:any)=>{
          return a.email === username && a.password === password
        });
        if(user){
            localStorage.setItem('currentUser', "loggedin"); 
            this.toastr.success('Login Successfully', '',{closeButton:true});
            document.getElementById('cancel')?.click();
            //alert('login')
            this.router.navigate(["category/categories"]);  
            return true;  
        }else{
          this.toastr.error('Invalid Details', '');
          return false;
        }
      }
    )
    
    
    // if (username == "admin" && password == "admin") {  
    //   localStorage.setItem('currentUser', "loggedin"); 
    //   this.toastr.success('Login Successfully', '',{closeButton:true});
    //   this.router.navigate(["category/categories"]);  
    //   return true;  
    // }  
  }  

  logout() {  
     localStorage.removeItem('currentUser');  
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }  
}


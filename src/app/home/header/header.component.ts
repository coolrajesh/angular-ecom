import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, FormBuilder,Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ApiService } from '../../services/api.service';
import { AuthenticationService } from '../../services/authentication.service';  


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  closeResult = '';
  modal_sts:boolean=false;
  loginForm:FormGroup|any;


  constructor(private formBuilder: FormBuilder,private modalService: NgbModal,private apiService:ApiService,private toastr: ToastrService,private router: Router,private auth:AuthenticationService) { 
   
  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({

          email:['',[Validators.required]],
          password:['',[Validators.required]]
    });
  }

  doLogin(){     
    this.apiService.apiGet('loginAPI').subscribe(
      res=>{
        console.log(res);        
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.controls['email'].value && a.password === this.loginForm.controls['password'].value
        });
        if(user){
          localStorage.setItem('currentUser', "loggedin");
          this.toastr.success('Login Successfully d', '',{closeButton:true});
          this.router.navigate(['category/categories']);
          document.getElementById('cancel')?.click();
        }else{
          this.toastr.error('Invalid Details', '');
        }
      }
    )
  }

  login() {
    // if (this.loginForm.controls['email'].value != '' && this.loginForm.controls['password'] != '') {  
    //   if (this.auth.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value)) {  
    //     document.getElementById('cancel')?.click();
    //   }  
    //   else  
    //     alert("Wrong username or password");  
    // }  
    this.auth.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value);
    if(localStorage.getItem('currentUser') == 'loggedin'){
      document.getElementById('cancel')?.click();
    }
     
         
    //this.auth.login(this.loginForm.controls['email'].value,this.loginForm.controls['password'].value);
  }  

  get f() { return this.loginForm.controls; }

  open(content:any){

      this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title'});
  }

 

  // open(content:any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     alert(this.closeResult)
  //   });
  // }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.submitDetails()
   // this.getContactDetails()
  }

  getContactDetails(){

    this.apiService.apiGet('contactUsAPI').subscribe(res=>{
        console.log(res)
    })
    
  }

  submitDetails(){     
      let obj = {

          'name': 'Rajesh k roy',
          'email': 'rajesh@gmail.com',
          'phone':'7827162410',
          'query':'test'
      }  
     this.apiService.apiPost(obj,'saveContactAPI').subscribe(res=>{
          console.log(res);
          this.toastr.success('Details saved successfully','');
        },error=>{
            console.log(error);
            if(error.status === 404){          
              this.toastr.error('Server Error!','');
            }
        }
     )   

    // this.apiService.apiPost(obj,'saveContactAPI')
    // .subscribe({next:(data) => {
    //     console.log(data)
    //   },
    //   error:(err) => {
    //     console.log(err);
    //   }
    // })
    
  }

}

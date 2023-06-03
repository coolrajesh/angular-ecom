import { Component, OnInit, Input } from '@angular/core';
//import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { LockComponent} from '../../app/authentication/lock/lock.component';
import {CreateComponent } from '../category/create/create.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  closeResult = '';
  rows:any = [];
  columns:any = [];
  loadingIndicator = true;
  total_count = 0;
  modalOtions:NgbModalOptions = {
    scrollable: true,
    windowClass: 'myCustomModalClass',
    keyboard: false,
    backdrop: 'static',
    animation:true,
    centered:true,
    size: 'lg'
  }


  constructor(private formBuilder: FormBuilder,private modalService: NgbModal,private lockComponent : LockComponent) { }

  ngOnInit(): void {

    
    this.rows = [{  
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',  
      'status': 'ACTIVE',  
      'title_line1': 'MAKING FANTASY FOOTBALL',  
      'title_line2': 'A REAL THING',  
      'type': 'FCF',  
      'order_number': 1  
    }, {  
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',  
      'status': 'ACTIVE',  
      'title_line1': 'MAKING FANTASY FOOTBALL',  
      'title_line2': 'A REAL THING',  
      'type': 'FCF1',  
      'order_number': 2  
    }, {  
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',  
      'status': 'ACTIVE',  
      'title_line1': 'MAKING FANTASY FOOTBALL',  
      'title_line2': 'A REAL THING',  
      'type': 'FCF2',  
      'order_number': 3  
    }, {  
      'id': '05fb32e7-9fae-4879-8379-d037937fdc24',  
      'status': 'ACTIVE',  
      'title_line1': 'MAKING FANTASY FOOTBALL',  
      'title_line2': 'A REAL THING',  
      'type': 'FCF3',  
      'order_number': 4  
    }];  
    this.total_count = this.rows.length;  

    //this.columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  }

  test(id:any){
    alert(id)
  } 

  openModal(link:any) {
    const modalRef = this.modalService.open(CreateComponent,this.modalOtions);
    let obj = {
                    prop1: 'Some Data',
                    prop2: 'From Parent Component',
                    prop3: 'This Can be anything'
              }
              
     //modalRef.componentInstance.src = link;
     modalRef.componentInstance.data = obj;
     modalRef.componentInstance.updatedData.subscribe((receivedEntry:any) => {
      console.log(receivedEntry);
    })
  } 

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

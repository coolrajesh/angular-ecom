import { Component,OnInit, Input,Output,EventEmitter } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ValidatorService } from '../../services/validator.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() data:any;
  @Output() updatedData: EventEmitter<any> = new EventEmitter();
  categoryForm!: FormGroup;

   data1:any;
  constructor(private formBuilder: FormBuilder,public activeModal: NgbActiveModal) {
    
  }

  ngOnInit(){
    
    this.createFormControl();
   
  }

  openModal(){
    let data = {
      prop1: 'updated Data',
      prop2: 'From child Component',
      prop3: 'This is from child'
    }

    this.updatedData.emit(data);
  }

  createFormControl(){

      this.categoryForm = this.formBuilder.group({
        name: ['', [Validators.required,Validators.pattern(ValidatorService.name_pattern)]],
        description: ['',  [Validators.required]],     
      },     
    );
  }

  get f() { return this.categoryForm.controls; }

}

import { Component,OnInit, Input,Output,EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html'
})
export class LockComponent {

  @Input() data:any;
  @Output() updatedData: EventEmitter<any> = new EventEmitter();


  data1:any;
  constructor(public activeModal: NgbActiveModal) {
    
  }

  ngOnInit(){
    //alert('k'+JSON.stringify(this.data))
   
  }

  goBack(){

    let data = {
      prop1: 'updated Data',
      prop2: 'From child Component',
      prop3: 'This is from child'
    }

    this.updatedData.emit(data);
  }
}

import { Component, OnInit } from '@angular/core';
//import { Columns, Config, DefaultConfig } from 'ngx-easy-table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  rows:any = [];
  columns:any = [];
  loadingIndicator = true;
  total_count = 0;

  constructor() { }

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
}

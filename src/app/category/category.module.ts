import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Category Page',
      urls: [
        { title: 'Dashboard', url: '/category' },
        { title: 'Category Page' }
      ]
    },
    component: CategoryComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule,NgxDatatableModule, RouterModule.forChild(routes)],
  declarations: [CategoryComponent]
})
export class CategoryModule { }

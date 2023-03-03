import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { LockComponent} from '../../app/authentication/lock/lock.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


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
  declarations: [CategoryComponent],
  providers: [LockComponent,NgbActiveModal,NgbModal],

})
export class CategoryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { CategoryRoutes } from './category.routing';


import { CategoryComponent } from './category.component';
import { LockComponent} from '../../app/authentication/lock/lock.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { FullComponent } from '../layouts/full/full.component';


// const routes: Routes = [
//   {
//     path: '',
//     data: {
//       title: 'Category Page',
//       urls: [
//         { title: 'Dashboard', url: '/category' },
//         { title: 'Category Page' }
//       ]
//     },
//     component: CategoryComponent
//   }
// ];




@NgModule({
  imports: [FormsModule, ReactiveFormsModule,CommonModule,NgxDatatableModule, RouterModule.forChild(CategoryRoutes)],
  declarations: [CategoryComponent, CreateComponent],
  providers: [LockComponent,CreateComponent,NgbActiveModal,NgbModal],

})
export class CategoryModule { }

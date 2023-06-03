import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent} from '../index/index/index.component';
import { ProducedetailsComponent} from '../producedetails/producedetails.component'

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Index",
      urls: [{ title: "Index", url: "/index" }, { title: "Index" }],
    },
    component: IndexComponent,
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }

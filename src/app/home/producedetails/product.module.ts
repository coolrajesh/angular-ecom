import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import {ProducedetailsComponent } from './producedetails.component';

const routes: Routes = [
    {
      path: "",
      data: {
        title: "Details",
        urls: [{ title: "Details", url: "/details" }, { title: "Details" }],
      },
      component: ProducedetailsComponent,
    },
  ];

  @NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule.forChild(routes),
    ],
    declarations: [
    ],
  })
  export class ProductDetailsModule {}
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { EmploymentRoutingModule } from './employment-routing.module';
import { EmploymentComponent } from './employment/employment.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    EmploymentComponent
  ],
  imports: [
    CommonModule,
    EmploymentRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class EmploymentModule { }

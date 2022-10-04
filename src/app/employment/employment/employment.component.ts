import { Component, OnInit } from '@angular/core';
import { Employment } from '../model/employment';
import { EmploymentServiceService } from '../service/employment-service.service';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {

  employment: Employment[];
  displayedColumns =[
    'id',
    'nome',
    'email',
    'endereco',
    'telefone' ,
    'salario'
  ];

  constructor(private employmentService: EmploymentServiceService) {
    this.employment= this.employmentService.list();
   }

  ngOnInit(): void {
  }

}

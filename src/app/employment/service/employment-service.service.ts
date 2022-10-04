import { Injectable } from '@angular/core';
import { Employment } from '../model/employment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmploymentServiceService {

  constructor(private httpClient: HttpClient) { }
  list(): Employment[]{
    return [
      {id:1, email:'joaopaulo291096@gmail.com', endereco:'Luanda', nome:'João Paulo', salario:1230, telefone:'944764288'},
      {id:2, email:'adao@gmail.com', endereco: 'Luanda',nome: 'adão João',salario: 123, telefone: '1212'},
      {id:1, email:'joaopaulo291096@gmail.com', endereco:'Luanda', nome:'João Paulo', salario:1230, telefone:'944764288'},
      {id:2, email:'adao@gmail.com', endereco: 'Luanda',nome: 'adão João',salario: 123, telefone: '1212'}
    ];
  }
}
